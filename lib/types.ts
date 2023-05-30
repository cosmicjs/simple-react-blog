export interface GlobalData {
  metadata: {
    site_title: string;
    site_tag: string;
  };
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  metadata: {
    published_date: string;
    content: string;
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

export interface Author {
  id: string;
  slug: string;
  title: string;
  metadata: {
    image?: {
      imgix_url: string | null | undefined;
    };
  };
}
