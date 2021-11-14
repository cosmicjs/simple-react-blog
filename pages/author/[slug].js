import axios from 'axios'
import _ from 'lodash'
import Footer from '../../components/partials/footer'
import Header from '../../components/partials/header'
import helpers from '../../helpers'
import config from '../../config'
import React from 'react';
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const gql_query = `{
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
    return await axios.post(`https://graphql.cosmicjs.com/v3`, { query: gql_query })
    .then(function (response) {
      return {
        cosmic: {
          posts: _.filter(response.data.data.getObjects.objects, (post) => { return post.metadata && post.metadata.author && post.metadata.author.slug === query.slug }),
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
            this.props.cosmic.posts &&
            this.props.cosmic.posts.map(post => {
              const friendly_date = helpers.friendlyDate(new Date(post.created_at))
              post.friendly_date = friendly_date.month + ' ' + friendly_date.date
              return (
                 <div className="card" data-href={`/posts/${post.id}`} key={post.id}>
                  {
                    post.metadata.hero.imgix_url &&
                    <a href={`/posts/${post.id}`} className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url})`}}></a>
                  }
                  <div className="card-padding">
                    <h2 className="blog__title blog__title--small">
                      <a href={`/posts/${post.id}`}>{post.title}</a>
                    </h2>
                    <div className="blog__author">
                      <a href={`/author/${post.metadata.author.slug}`}>
                        <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
                      </a>
                      <div className="blog__author-title">by <a href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</a> on {post.friendly_date}</div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.teaser}}></div>
                    <div className="blog__read-more">
                      <a href={`/posts/${post.id}`}>Read more...</a>
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