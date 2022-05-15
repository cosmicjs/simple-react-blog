import axios from 'axios'
import _ from 'lodash'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import helpers from '../../helpers'
import config from '../../config'
import React from 'react';
import Link from 'next/link';
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json());

function Post({ cosmic }) {
  if (!cosmic)
   return <ErrorPage statusCode={404} />
  let friendly_date
  if (cosmic.post) {
    friendly_date = helpers.friendlyDate(new Date(cosmic.post.created_at))
    cosmic.post.friendly_date = friendly_date.month + ' ' + friendly_date.date
  }
  const router = useRouter()
  const { revision } = router.query
  if(revision) {
    // Get revision
    const { data } = useSWR(
      `https://api.cosmicjs.com/v2/buckets/${config.bucket.slug}/objects/${cosmic.post.id}/revisions/${revision}?read_key=${config.bucket.read_key}&props=id,type,slug,title,content,metadata,created_at`,
      fetcher
    );
    if (data) {
      cosmic.post = data.revision;
    }
  }
  return (
    <div>
      <Header cosmic={ cosmic }/>
      {
        cosmic.post && cosmic.post.metadata.hero.imgix_url &&
        <div className="blog-post-hero" style={{ backgroundImage: `url(${cosmic.post.metadata.hero.imgix_url})`}}></div>
      }
      <main className="container">
        <div className="card-padding">
          <h2 className="blog__title">
            {
              !cosmic.post &&
              <div style={{ textAlign: 'center' }}>Post Not found</div>
            }
            {
              cosmic.post &&
              <Link href={`/posts/${cosmic.post.slug}`}><a>{cosmic.post.title}</a></Link>
            }
          </h2>
          {
            cosmic.post &&
            <div>
              <div className="blog__author">
                <Link href={`/author/${cosmic.post.metadata.author.slug}`}>
                  <a>
                    <div className="blog__author-image" style={{ backgroundImage: `url(${cosmic.post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
                  </a>
                </Link>
                <div className="blog__author-title">by <Link href={`/author/${cosmic.post.metadata.author.slug}`}><a>{cosmic.post.metadata.author.title}</a></Link> on {cosmic.post.friendly_date}</div>
                <div className="clearfix"></div>
              </div>
              <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: cosmic.post.content}}></div>
            </div>
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps({ params }) {
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
          slug: "${params.slug}"
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
  return await Promise.all([globals, post]).then(values => {
    return {
      props: {
        cosmic: {
          global: values[0],
          post: values[1]
        }
      }
    }
  });
}

export async function getAllDataWithSlug() {
 const posts_query = `{
    getObjects(
      bucket_slug: "${config.bucket.slug}",
      read_key: "${config.bucket.read_key}"
      input: {
        query: {
          type: "posts"
        }
        props: "slug"
      }
    ) {
       objects {
        slug
      }
    }
  }`
  let posts = await axios.post(`https://graphql.cosmicjs.com/v3`, { query: posts_query })
  .then(function (response) {    
    return response.data.data.getObjects.objects
  })
  .catch(function (error) {
    console.log(error)
  })
  return posts
}

export async function getStaticPaths() {
  const dataWithSlug = (await getAllDataWithSlug()) || [];
  return {
    paths: dataWithSlug.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}

export default Post