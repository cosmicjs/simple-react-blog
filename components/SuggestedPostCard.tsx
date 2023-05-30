import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import helpers from '../helpers';
import { Post } from '../lib/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      {post.metadata.hero?.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            className='mb-5 rounded-xl bg-no-repeat object-cover object-center transition-transform duration-200 ease-out hover:scale-[1.02]'
            src={`${post.metadata.hero?.imgix_url}?w=1400&auto=format`}
            width={1400}
            height={340}
            alt={post.title}
          />
        </Link>
      )}
      <h2 className='pb-3 text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className='flex items-center space-x-2 text-zinc-500 dark:text-zinc-400'>
        <Link href={`/author/${post.metadata.author?.slug}`}>
          <Image className='h-8 w-8 rounded-full' src={`${post.metadata.author?.metadata.image?.imgix_url}?w=100&auto=format`} width={32} height={32} alt={post.title}></Image>
        </Link>
        <div>
          <span>
            by{' '}
            <a href={`/author/${post.metadata.author?.slug}`} className='font-semibold text-green-600 dark:text-green-200'>
              {post.metadata.author?.title}
            </a>{' '}
            on {helpers.stringToFriendlyDate(post.metadata.published_date)}
          </span>
        </div>
      </div>
    </div>
  );
}
