import Link from 'next/link';
import Image from 'next/image';
import ArrowLeft from '../../../components/ArrowLeft';
import cosmic from '../../../lib/cosmic';
import helpers from '../../../helpers';
import SuggestedPostCard from '../../../components/SuggestedPostCard';

export async function generateMetadata({ params }) {
  try {
    // Get post
    const data = await cosmic.objects
      .findOne({
        type: 'posts',
        slug: params.slug,
      })
      .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    const post = await data.object;
    return post;
  } catch (error) {
    console.log('Oof', error);
  }
  return {
    title: `${post.title} | Simple React Blog`,
  };
}

async function getRelatedPosts({ params }) {
  try {
    // Get suggested posts
    const data = await cosmic.objects
      .find({
        type: 'posts',
        slug: {
          $ne: params?.slug,
        },
      })
      .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
      .sort('random')
      .depth(1);
    const suggestedPosts = await data.objects;
    return suggestedPosts;
  } catch (error) {
    console.log('Oof', error);
  }
}

export default async ({ params }) => {
  let post;
  try {
    // Get post
    post = await cosmic.objects
      .findOne({
        type: 'posts',
        slug: params.slug,
      })
      .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
      .depth(1);
    post = await post.object;
  } catch (error) {
    console.log('Oof', error);
  }

  const suggestedPosts = await getRelatedPosts({ params });

  return (
    <>
      {post && post.metadata.hero.imgix_url && (
        <Image className='mb-5 h-[640px] w-full bg-no-repeat object-cover object-center' src={`${post.metadata.hero.imgix_url}?w=1400&auto=format`} width={2000} height={640} />
      )}
      <main className='flex flex-col'>
        <div className='flex w-full flex-col items-start justify-start px-4 md:flex-row'>
          <div className='mt-4 flex w-1/4 justify-start pb-4 md:justify-center md:pb-0'>
            <Link href='/' className='rounded-full border border-zinc-100 bg-white p-2 text-zinc-700 shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300'>
              <ArrowLeft className='h-4 w-4' />
            </Link>
          </div>
          <div className='flex w-full flex-col md:w-2/4'>
            <h2>
              {!post && <div className='text-center'>Post Not found</div>}
              {post && <Link href={`/posts/${post.slug}`}>{post.title}</Link>}
            </h2>
            {post && (
              <>
                <div className='flex space-x-1 pb-8'>
                  <span className='text-zinc-600 dark:text-zinc-400'>by</span>
                  <a href={`/author/${post.metadata.author.slug}`} className='font-semibold text-green-600 dark:text-green-200'>
                    {post.metadata.author.title}
                  </a>
                  <span className='text-zinc-600 dark:text-zinc-400'>on {helpers.stringToFriendlyDate(post.metadata.published_date)}</span>
                </div>
                <hr className='w-full border-t border-zinc-300 pb-8 dark:border-zinc-700' />
                <div dangerouslySetInnerHTML={{ __html: post.metadata.content }}></div>
              </>
            )}
          </div>
        </div>
        <div className='mx-auto mt-8 w-full max-w-3xl'>
          <hr className='w-full border-t border-zinc-300 pb-8 dark:border-zinc-700' />
          {suggestedPosts && (
            <div className='flex w-full flex-col px-4 lg:px-0'>
              <h3 className='pb-3 text-xl font-semibold text-zinc-800 dark:text-zinc-200'>Suggested Posts</h3>
              <div className='flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
                {suggestedPosts
                  // .filter((nextPost) => nextPost?.id !== post?.id)
                  .slice(0, 2)
                  .map((post) => {
                    return <SuggestedPostCard key={post.id} post={post} />;
                  })}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
