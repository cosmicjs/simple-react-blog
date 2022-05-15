import axios from 'axios'
import _ from 'lodash'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import helpers from '../helpers'
import config from '../config'
import React from 'react';

function Home({ cosmic }) {
  if (!cosmic)
    return <div>Loading...</div>
  return (
    <div>
      <Header cosmic={ cosmic }/>
      <main className="container">
        {
          !cosmic.posts &&
          'You must add at least one Post to your Bucket'
        }
        {
          cosmic.posts &&
          cosmic.posts.map(post => {
            const friendly_date = helpers.friendlyDate(new Date(post.created_at))
            post.friendly_date = friendly_date.month + ' ' + friendly_date.date
            return <PostCard post={post} />
          })
        }
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
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
      props: {
        cosmic: {
          posts: _.filter(response.data.data.getObjects.objects, { type: 'posts' }),
          global: _.keyBy(_.filter(response.data.data.getObjects.objects, { type: 'globals' }), 'slug')
        }
      }
    }
  })
  .catch(function (error) {
    return console.log(error)
  })
}

export default Home