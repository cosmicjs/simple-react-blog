import axios from 'axios'
import _ from 'lodash'
import Footer from '../components/partials/footer'
import Header from '../components/partials/header'
import helpers from '../helpers'
import config from '../config'
import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const query = `{
      getObjects(bucket_slug: "${config.bucket.slug}",
        read_key: "${config.bucket.read_key}"
      )
      {
        objects {
          id
          type
          slug
          title
          metadata
          created_at
        }
      }
    }`
    return await axios.post(`https://graphql.cosmicjs.com/v3`, { query })
    .then(function (response) {
      return {
        cosmic: {
          posts: _.filter(response.data.data.getObjects.objects, { type: 'posts' }),
          global: _.keyBy(_.filter(response.data.data.getObjects.objects, { type: 'globals' }), 'slug')
        }
      }
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  render() {
    if (!this.props.cosmic)
      return <div>Loading...</div>
    return (
      <div>
        <Header cosmic={ this.props.cosmic }/>
        <main className="container">
          {
            !this.props.cosmic.posts &&
            'You must add at least one Post to your Bucket'
          }
          {
            this.props.cosmic.posts &&
            this.props.cosmic.posts.map(post => {
              
              const friendly_date = helpers.friendlyDate(new Date(post.created_at))
              post.friendly_date = friendly_date.month + ' ' + friendly_date.date
         
              return (
                 <div className="card" key={post.id}>
                  {
                    post.metadata.hero.imgix_url &&
                    <Link href={`/posts/${post.slug}`}>
                      <a className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url})`}}></a>
                    </Link>
                  }
                  <div className="card-padding">
                    <h2 className="blog__title blog__title--small">
                      <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                      </Link>
                    </h2>
                    <div className="blog__author">
                      <Link href={`/author/${post.metadata.author.slug}`}>
                        <a>
                          <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
                        </a>
                      </Link>
                      <div className="blog__author-title">by <a href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</a> on {post.friendly_date}</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.teaser}}></div>
                    <div className="blog__read-more">
                      <Link href={`/posts/${post.metadata.author.slug}`}>
                        <a>Read more...</a>
                      </Link>
                    </div>
                  </div>
                </div>  
              )
            })
          }
        </main>
        <Footer />
      </div>
    )
  }
}
