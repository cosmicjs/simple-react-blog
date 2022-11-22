import _ from 'lodash'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import helpers from '../../helpers'
import config from '../../config'
import React from 'react'
import Link from 'next/link'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import bucket from '../../lib/cosmic'
// TODO add get revision to NPM module
const COSMIC_API_URL = 'https://api.cosmicjs.com'
const COSMIC_API_VERSION = 'v2'

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
    // Get revision // TODO add get revision to NPM module
    const url = `${COSMIC_API_URL}/${COSMIC_API_VERSION}/buckets/${config.bucket.slug}/objects/${cosmic.post.id}/revisions/${revision}?read_key=${config.bucket.read_key}&props=id,type,slug,title,content,metadata,created_at`
    const { data } = useSWR(
      url,
      fetcher
    );
    if (data) {
      cosmic.post = data.revision;
    }
  }
  return (
    <div>
      <Head>
        <title key="sitetitle">{ cosmic.post.title }</title>
      </Head>
      <Header cosmic={ cosmic }/>
      {
        cosmic.post && cosmic.post.metadata.hero.imgix_url &&
        <div className="blog-post-hero" style={{ backgroundImage: `url(${cosmic.post.metadata.hero.imgix_url}?w=2000&auto=format)`}}></div>
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
  // Get Objects
  const props = ['id','type','slug','title','content','metadata','created_at'].toString();
  try {
    
    // Get globals
    const globals = await bucket.objects.find({
      type: 'globals',
    })
    .props(props)

    // Get post
    const posts = await bucket.objects.find({
      type: 'posts',
      slug: params.slug,
    })
    .props(props)
    .depth(1)
    
    return {
      props: {
        cosmic: {
          post: posts.objects[0],
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
    type: 'posts'
  }).props('slug')
  return response.objects
}

export async function getStaticPaths() {
  const dataWithSlug = (await getAllDataWithSlug()) || [];
  return {
    paths: dataWithSlug.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}

export default Post