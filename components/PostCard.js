import Link from 'next/link';
export default function PostCard({ post }) {
  return <div className="card">
    {
      post.metadata.hero.imgix_url &&
      <Link href={`/posts/${post.slug}`}>
        <a className="blog-post-hero blog-post-hero--short" style={{ backgroundImage: `url(${post.metadata.hero.imgix_url}?w=1400&auto=format)`}}></a>
      </Link>
    }
    <div className="card-padding">
      <h2 className="blog__title blog__title--small">
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h2>
      <div className="blog__author">
        <Link href={`/author/${post.metadata.author.slug}`}>
          <a>
            <div className="blog__author-image" style={{ backgroundImage: `url(${post.metadata.author.metadata.image.imgix_url}?w=100&auto=format)`}}></div>
          </a>
        </Link>
        <div className="blog__author-title">by <a href={`/author/${post.metadata.author.slug}`}>{post.metadata.author.title}</a> on {post.friendly_date}</div>
        <div className="clearfix"></div>
      </div>
      <div className="blog__teaser droid" dangerouslySetInnerHTML={{__html: post.metadata.teaser}}></div>
      <div className="blog__read-more">
        <Link href={`/posts/${post.slug}`}>
          <a>Read more...</a>
        </Link>
      </div>
    </div>
  </div>
}