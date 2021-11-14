import axios from 'axios'
import _ from 'lodash'
import Footer from '../../components/partials/footer'
import Header from '../../components/partials/header'
import helpers from '../../helpers'
import config from '../../config'
import React from 'react';
import { withRouter } from 'next/router';

export default withRouter(class extends React.Component {
  static async getInitialProps({ query }) {
    const globals_query = `{
      getObjects(bucket_slug: "${config.bucket.slug}",
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
      getObject(bucket_slug: "${config.bucket.slug}", 
      read_key: "${config.bucket.read_key}",
      object_id:"${query.slug}"
      input: {
        revision: "${query.revision}"
      }) {
          id
          type
          slug
          title
          content
          metadata
          created_at
      }
    }`
    const post = await axios.post(`https://graphql.cosmicjs.com/v3`, { query: post_query })
    .then(function (response) {      
      return response.data.data.getObject
    })
    .catch(function (error) {
      console.log(error)
    })
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
                <a href={`/${this.props.cosmic.post.slug}`}>{this.props.cosmic.post.title}</a>
              }
            </h2>
            {
              this.props.cosmic.post &&
              <div>
                <div className="blog__author">
                  <a href={`/author/${this.props.cosmic.post.metadata.author.slug}`}>
                    <div className="blog__author-image" style={{ backgroundImage: `url(${this.props.cosmic.post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
                  </a>
                  <div className="blog__author-title">by <a href={`/author/${this.props.cosmic.post.metadata.author.slug}`}>{this.props.cosmic.post.metadata.author.title}</a> on {this.props.cosmic.post.friendly_date}</div>
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
})