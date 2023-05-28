import PostCard from '../components/PostCard'
import helpers from '../helpers'
import cosmic from '../lib/cosmic'
export default async function Page() {
  // Get posts
  let posts;
  try {
    posts = (await cosmic.objects.find({
      type: "posts",
    }).props('id,type,slug,title,metadata,created_at')
    .depth(1)).objects;
  } catch (error) {
    console.log('Oof', error)
  }
  return <main className="container">
    {
      !posts &&
      'You must add at least one Post to your Bucket'
    }
    {
      posts &&
      posts.map(post => {
        const friendly_date = helpers.friendlyDate(new Date(post.created_at))
        post.friendly_date = friendly_date.month + ' ' + friendly_date.date
        return <div key={post.id}><PostCard post={post} /></div>
      })
    }
  </main>;
}