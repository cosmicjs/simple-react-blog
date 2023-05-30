import { createBucketClient } from '@cosmicjs/sdk';
import { Post } from './types';
import { GlobalData } from './types';
import { Author } from './types';

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? '',
  // @ts-ignore
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? '',
});
export default cosmic;

export async function getGlobalData(): Promise<GlobalData> {
  // Get global data
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'globals',
          slug: 'header',
        })
        .props('metadata.site_title,metadata.site_tag')
        .depth(1)
    );
    const siteData: GlobalData = data.object;
    return Promise.resolve(siteData);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as GlobalData);
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    // Get all posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
        })
        .props('id,type,slug,title,metadata,created_at')
        .depth(1)
    );
    const posts: Post[] = await data.objects;
    return Promise.resolve(posts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}

export async function getPost({ params }: { params: { slug: string } }): Promise<Post> {
  try {
    // Get post
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'posts',
          slug: params.slug,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .depth(1)
    );
    const post = await data.object;
    return post;
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as Post);
}

export async function getRelatedPosts({ params }: { params: { slug: string } }): Promise<Post[]> {
  try {
    // Get suggested posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          slug: {
            $ne: params?.slug,
          },
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .sort('random')
        .depth(1)
    );
    const suggestedPosts: Post[] = await data.objects;
    return Promise.resolve(suggestedPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}

export async function getAuthor({ params }: { params: { id: string; slug: string } }): Promise<Author> {
  try {
    const data: any = await Promise.resolve(
      cosmic.objects
        .findOne({
          type: 'authors',
          slug: params.slug,
        })
        .props('id,title')
        .depth(1)
    );
    const author = await data.object;
    return Promise.resolve(author);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve({} as Author);
}

export async function getAuthorPosts({ authorId }: { authorId: string }): Promise<Post[]> {
  try {
    // Get Author's posts
    const data: any = await Promise.resolve(
      cosmic.objects
        .find({
          type: 'posts',
          'metadata.author': authorId,
        })
        .props(['id', 'type', 'slug', 'title', 'metadata', 'created_at'])
        .sort('random')
        .depth(1)
    );
    const authorPosts: Post[] = await data.objects;
    return Promise.resolve(authorPosts);
  } catch (error) {
    console.log('Oof', error);
  }
  return Promise.resolve([]);
}
