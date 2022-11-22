import _ from 'lodash'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import helpers from '../helpers'
import bucket from '../lib/cosmic'
import React from 'react';
import Head from 'next/head'

function Home({ cosmic }) {
  if (!cosmic)
    return <div>Loading...</div>
  return (
    <div>
      <Head>
        <title key="sitetitle">{ cosmic.post ? cosmic.post.title + ' |' : '' } Simple React Blog</title>
      </Head>
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
            return <div key={post.id}><PostCard post={post} /></div>
          })
        }
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  // Get Objects
  try {
    const response = await bucket.objects.find({
      type: {
        $in: ['posts','globals']
      }
    }).props('id,type,slug,title,metadata,created_at')
    .depth(1)
    return {
      props: {
        cosmic: {
          posts: _.filter(response.objects, { type: 'posts' }),
          global: _.keyBy(_.filter(response.objects, { type: 'globals' }), 'slug')
        }
      }
    }
  } catch (error) {
    console.log('Oof', error)
  }
}

export default Home