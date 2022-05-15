import axios from 'axios'
import _ from 'lodash'
import Footer from '../../components/partials/footer'
import Header from '../../components/partials/header'
import helpers from '../../helpers'
import config from '../../config'
import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const globals_query = `{
      getObjects(
        bucket_slug: "${config.bucket.slug}",
        read_key: "${config.bucket.read_key}"
      ) {
        objects {
          id
          type
          slug
          title
          content
          metadata
          created_at
        }
      }
    }`
    const globals = await axios.post(`https://graphql.cosmicjs.com/v3`, { query: globals_query })
    .then(function (response) {
      return _.keyBy(_.filter(response.data.data.getObjects.objects, { type: 'globals' }), 'slug')
    })
    .catch(function (error) {
      console.log(error)
    })
    const post_query = `{
      getObjects(
        bucket_slug: "${config.bucket.slug}",
        read_key: "${config.bucket.read_key}"
        input: {
          query: {
            slug: "${query.slug}"
            revision: "${query.revision}"
          }
        }
      ) {
         objects {
          id
          type
          slug
          title
          content
          metadata
          created_at
        }
      }
    }`
    let post = await axios.post(`https://graphql.cosmicjs.com/v3`, { query: post_query })
    .then(function (response) {    
      return response.data.data.getObjects.objects[0]
    })
    .catch(function (error) {
      console.log(error)
    })
    // Fetch Revision
    if (query.revision) {
      // Use REST API. No revision method available in GraphQL YET! See https://docs.cosmicjs.com/api-reference/object-revisions#get-object-revision
      const endpoint = `https://api.cosmicjs.com/v2/buckets/${config.bucket.slug}/objects/${post.id}/revisions/${query.revision}?read_key=${config.bucket.read_key}&props=id,type,slug,title,content,metadata,created_at`;
      const revision = await axios(endpoint)
      .then(function (response) {    
        return response.data.revision
      })
      .catch(function (error) {
        console.log(error)
      })
      // Set post data
      post = revision;
    }
    return await Promise.all([globals, post]).then(values => {
      return {
        cosmic: {
          global: values[0],
          post: values[1]
        }
      }
    });
  }
  render() {
    if (!this.props.cosmic)
      return <div>Loading...</div>
    let friendly_date
    if (this.props.cosmic.post) {
      friendly_date = helpers.friendlyDate(new Date(this.props.cosmic.post.created_at))
      this.props.cosmic.post.friendly_date = friendly_date.month + ' ' + friendly_date.date
    }
    return (
      <div>
        <Header cosmic={ this.props.cosmic }/>
        {
          this.props.cosmic.post && this.props.cosmic.post.metadata.hero.imgix_url &&
          <div className="blog-post-hero" style={{ backgroundImage: `url(${this.props.cosmic.post.metadata.hero.imgix_url})`}}></div>
        }
        <main className="container">
          <div className="card-padding">
            <h2 className="blog__title">
              {
                !this.props.cosmic.post &&
                <div style={{ textAlign: 'center' }}>Post Not found</div>
              }
              {
                this.props.cosmic.post &&
                <Link href={`/posts/${this.props.cosmic.post.slug}`}><a>{this.props.cosmic.post.title}</a></Link>
              }
            </h2>
            {
              this.props.cosmic.post &&
              <div>
                <div className="blog__author">
                  <Link href={`/author/${this.props.cosmic.post.metadata.author.slug}`}>
                    <a>
                      <div className="blog__author-image" style={{ backgroundImage: `url(${this.props.cosmic.post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
                    </a>
                  </Link>
                  <div className="blog__author-title">by <Link href={`/author/${this.props.cosmic.post.metadata.author.slug}`}><a>{this.props.cosmic.post.metadata.author.title}</a></Link> on {this.props.cosmic.post.friendly_date}</div>
                  <div className="clearfix"></div>
                </div>
                <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: this.props.cosmic.post.content}}></div>
              </div>
            }
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}