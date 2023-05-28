import Link from 'next/link';
import helpers from '../helpers'
export default function PostCard({ post }) {
  const published_at = helpers.friendlyDate(new Date(post.metadata.published_date))
  const friendly_date = `${published_at.month} ${published_at.date}, ${published_at.year}`
  return <div className="card">
    {
      post.metadata.hero.imgix_url &&
      <Link className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url}?w=1400&auto=format)`}} href={`/posts/${post.slug}`}></Link>
    }
    <div className="card-padding">
      <h2 className="blog__title blog__title--small">
        <Link href={`/posts/${post.slug}`}>
          {post.title}
        </Link>
      </h2>
      <div className="blog__author">
        <Link href={`/author/${post.metadata.author.slug}`}>
          <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metadata.image.imgix_url}?w=100&auto=format)`}}></div>
        </Link>
        <div className="blog__author-title">by <a href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</a> on {friendly_date}</div>
        <div className="clearfix"></div>
      </div>
      <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.teaser}}></div>
      <div className="blog__read-more">
        <Link href={`/posts/${post.slug}`}>
          Read more...
        </Link>
      </div>
    </div>
  </div>
}