import Link from 'next/link';
import Image from 'next/image';
import helpers from '../helpers';
import ArrowRight from './ArrowRight';
import Tag from './Tag';

export default function PostCard({ post }) {
  return (
    <div>
      {post.metadata.hero.imgix_url && (
        <Link href={`/posts/${post.slug}`}>
          <Image
            className='w-full h-[340px] object-cover bg-no-repeat object-center mb-5 rounded-xl hover:scale-[1.02] transition-transform ease-out duration-200'
            src={`${post.metadata.hero.imgix_url}?w=1400&auto=format`}
            width={1400}
            height={340}
          />
        </Link>
      )}
      <h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200 pb-3'>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <div className='flex space-x-2 items-center text-zinc-500 dark:text-zinc-400'>
        <Link href={`/author/${post.metadata.author.slug}`}>
          <Image className='rounded-full w-8 h-8' src={`${post.metadata.author.metadata.image.imgix_url}?w=100&auto=format`} width={32} height={32}></Image>
        </Link>
        <div>
          <span>
            by{' '}
            <a href={`/author/${post.metadata.author.slug}`} className='font-semibold text-green-600 dark:text-green-200'>
              {post.metadata.author.title}
            </a>{' '}
            on {helpers.stringToFriendlyDate(post.metadata.published_date)}
          </span>
        </div>
      </div>
      <div className='text-zinc-500 dark:text-zinc-300 py-6' dangerouslySetInnerHTML={{ __html: post.metadata.teaser }} />
      <div className='flex justify-between items-center font-semibold text-green-600 dark:text-green-200'>
        <Link href={`/posts/${post.slug}`}>
          <div className='flex space-x-2 items-center'>
            <span>Read more</span>
            <ArrowRight className='text-inherit h-4 w-4' />
          </div>
        </Link>
        <div className='flex justify-end space-x-2 select-none'>{post.metadata.categories && post.metadata.categories.map((category) => <Tag key={category.title}>{category.title}</Tag>)}</div>
      </div>
    </div>
  );
}
