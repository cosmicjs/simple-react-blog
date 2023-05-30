import React from 'react';
import PostCard from '../../../components/PostCard';
import { getAuthor, getAuthorPosts } from '../../../lib/cosmic';

export async function generateMetadata({ params }: { params: { id: string; slug: string } }) {
  const author = await getAuthor({ params });
  return {
    title: `${author.title} posts | Simple React Blog`,
  };
}

export default async ({ params }: { params: { id: string; slug: string } }) => {
  const author = await getAuthor({ params });
  const posts = await getAuthorPosts({ authorId: author.id });

  return (
    <main className='mx-auto w-full max-w-3xl flex-col px-4 lg:px-0'>
      <h1 className='my-4 text-4xl font-bold leading-tight tracking-tight text-zinc-700 dark:text-zinc-300'>Posts by {author.title}</h1>
      <div className='space-y-16'>
        {!posts && 'You must add at least one Post to your Bucket'}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </main>
  );
};
