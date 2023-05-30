import cosmic from './cosmic';

export interface Post {
  id: string;
  slug: string;
  title: string;
  metadata: {
    published_date: string;
    hero?: {
      imgix_url: string | null | undefined;
    };
    author?: {
      slug: string | null | undefined;
      title: string | null | undefined;
      metadata: {
        image?: {
          imgix_url: string | null | undefined;
        };
      };
    };
    teaser: string;
    categories: {
      title: string;
    }[];
  };
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
