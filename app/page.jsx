import PostCard from '../components/PostCard';
import cosmic from '../lib/cosmic';

export default async function Page() {
  // Get posts
  let posts;
  try {
    posts = (
      await cosmic.objects
        .find({
          type: 'posts',
        })
        .props('id,type,slug,title,metadata,created_at')
        .depth(1)
    ).objects;
  } catch (error) {
    console.log('Oof', error);
  }
  return (
    <main className='w-full max-w-3xl mx-auto flex-col space-y-16 px-4 lg:px-0'>
      {!posts && 'You must add at least one Post to your Bucket'}
      {posts &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
    </main>
  );
}
