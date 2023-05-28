import cosmic from '../../../lib/cosmic'
import PostCard from '../../../components/PostCard'

export async function generateMetadata({ params }) {
  const slug = params.slug[0]
  let author;
  try {
    author = (await cosmic.objects.findOne({
      type: 'authors',
      slug,
    }).props('id,title')
    .depth(1)).object;
  } catch (error) {
    console.log('Oof', error)
  }
  return {
    title: `${author.title} posts | Simple React Blog`
  };
}

export default async (params) => {
  const slug = params.params.slug[0]
  let author;
  let posts;
  try {
    author = (await cosmic.objects.findOne({
      type: 'authors',
      slug,
    }).props('id,title')
    .depth(1)).object;
    // Get posts with author id
    posts = (await cosmic.objects.find({
      type: 'posts',
      'metadata.author': author.id
    }).props(['id','type','slug','title','metadata','created_at'])
    .depth(1)).objects;
  } catch (error) {
    console.log('Oof', error)
  }
  return (
    <main className="container">
      <h1>Posts by {author.title}</h1>
      {
        !posts &&
        'You must add at least one Post to your Bucket'
      }
      {
        posts &&
        posts.map(post => {
          return <div key={post.id}><PostCard post={post} /></div>
        })
      }
    </main>
  )
}