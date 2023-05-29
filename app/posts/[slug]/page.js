import Link from 'next/link';
import cosmic from '../../../lib/cosmic'
import helpers from '../../../helpers'

export async function generateMetadata({ params }) {
  const slug = params.slug
  let post;
  try {
    // Get post
    post = (await cosmic.objects.findOne({
      type: 'posts',
      slug
    })
    .props(['id','type','slug','title','metadata','created_at'])
    .depth(1)).object
    
  } catch (error) {
    console.log('Oof', error)
  }
  return {
    title: `${post.title} | Simple React Blog`
  };
}

export default async ({ params }) => {
  const slug = params.slug
  let post;
  try {
    // Get post
    post = (await cosmic.objects.findOne({
      type: 'posts',
      slug
    })
    .props(['id','type','slug','title','metadata','created_at'])
    .depth(1)).object
    
  } catch (error) {
    console.log('Oof', error)
  }
  return <>
    {
      post && post.metadata.hero.imgix_url &&
      <div className="blog-post-hero" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url}?w=2000&auto=format)`}}></div>
    }
    <main className="container">
      <h2 className="blog__title">
        {
          !post &&
          <div style={{ textAlign: 'center' }}>Post Not found</div>
        }
        {
          post &&
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        }
      </h2>
      {
        post &&
        <>
          <div className="blog__author">
            <Link href={`/author/${post.metadata.author.slug}`}>
              <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metadata.image.imgix_url}?w=100)`}}></div>
            </Link>
            <div className="blog__author-title">by <Link href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</Link> on {helpers.stringToFriendlyDate(post.metadata.published_date)}</div>
            <div className="clearfix"></div>
          </div>
          <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.content}}></div>
        </>
      }
    </main>
  </>
}