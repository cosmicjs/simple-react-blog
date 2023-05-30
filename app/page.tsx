import React from 'react';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/cosmic';

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();

  return (
    <main className='mx-auto w-full max-w-3xl flex-col space-y-16 px-4 lg:px-0'>
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
