import Link from 'next/link';
import Image from 'next/image';
import ArrowLeft from '../../../components/ArrowLeft';
import cosmic from '../../../lib/cosmic';
import helpers from '../../../helpers';

export async function generateMetadata({ params }) {
  const slug = params.slug;
  let post;
  try {
    // Get post
    post = (
      await cosmic.objects
        .findOne({
          type: 'posts',
          slug,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    ).object;
  } catch (error) {
    console.log('Oof', error);
  }
  return {
    title: `${post.title} | Simple React Blog`,
  };
}

export default async ({ params }) => {
  const slug = params.slug;
  let post;
  try {
    // Get post
    post = (
      await cosmic.objects
        .findOne({
          type: 'posts',
          slug,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    ).object;
  } catch (error) {
    console.log('Oof', error);
  }
  return (
    <>
      {post && post.metadata.hero.imgix_url && (
        <Image className='w-full h-[640px] object-cover bg-no-repeat object-center mb-5' src={`${post.metadata.hero.imgix_url}?w=1400&auto=format`} width={2000} height={640} />
      )}
      <main className='w-full flex flex-col md:flex-row justify-start px-4 items-start'>
        <div className='flex pb-4 md:pb-0 mt-4 w-1/4 justify-start md:justify-center'>
          <Link href='/' className='p-2 rounded-full bg-white dark:bg-zinc-950 shadow-md border-zinc-100 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'>
            <ArrowLeft className='h-4 w-4' />
          </Link>
        </div>
        <div className='flex flex-col w-full md:w-2/4'>
          <h2>
            {!post && <div className='text-center'>Post Not found</div>}
            {post && <Link href={`/posts/${post.slug}`}>{post.title}</Link>}
          </h2>
          {post && (
            <>
              <div className='pb-8'>
                <span>
                  by{' '}
                  <a href={`/author/${post.metadata.author.slug}`} className='font-semibold text-green-600 dark:text-green-200'>
                    {post.metadata.author.title}
                  </a>{' '}
                  on {helpers.stringToFriendlyDate(post.metadata.published_date)}
                </span>
              </div>
              <hr className='border-t border-zinc-300 dark:border-zinc-700 w-full pb-8' />
              <div dangerouslySetInnerHTML={{ __html: post.metadata.content }}></div>
            </>
          )}
        </div>
      </main>
    </>
  );
};
