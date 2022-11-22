import _ from 'lodash'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PostCard from '../../components/PostCard'
import helpers from '../../helpers'
import React from 'react'
import Head from 'next/head'
import bucket from '../../lib/cosmic'

function AuthorPage({ cosmic }) {
  if (!cosmic)
    return <div>Loading...</div>
  return (
    <div>
      <Head>
        <title key="sitetitle">Author Posts</title>
      </Head>
      <Header cosmic={ cosmic }/>
      <main className="container">
        <h1>Posts by {cosmic.author.title}</h1>
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
// Get Global and Posts data
export async function getStaticProps({ params }) {
  const props = ['id','type','slug','title','content','metadata','created_at'].toString();
  try {
    // Get globals
    const globals = await bucket.objects.find({
      type: 'globals'
    }).props(props)
    .depth(1)
    // Get author id
    const authors = await bucket.objects.find({
      type: 'authors',
      slug: params.slug,
    }).props('id,title')
    .depth(1)
    // Get posts with author id
    const posts = await bucket.objects.find({
      type: 'posts',
      'metadata.author': authors.objects[0].id
    }).props(props)
    .depth(1)
    return {
      props: {
        cosmic: {
          author: authors.objects[0],
          posts: posts.objects,
          global: _.keyBy(globals.objects, 'slug')
        }
      }
    }
  } catch (error) {
    console.log('Oof', error)
  }
}

 // Get all paths for static page creation
export async function getAllDataWithSlug() {
  const response = await bucket.objects.find({
    type: 'authors'
  }).props('slug')
  return response.objects
}

export async function getStaticPaths() {
  const dataWithSlug = (await getAllDataWithSlug()) || [];
  return {
    paths: dataWithSlug.map((author) => `/author/${author.slug}`),
    fallback: true,
  }
}

export default AuthorPage