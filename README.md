# Simple React Blog
<img width="1274" alt="simple-react-blog" src="https://user-images.githubusercontent.com/1950722/173696384-bbfac078-0221-4693-a819-6f08b5a4d14b.png">

### [View Demo](https://cosmicjs.com/apps/simple-react-blog/demo)

### React + Next.js + Cosmic
This blog uses Next.js to create a React blog.  It connects to the Cosmic API via the [Cosmic NPM module](https://www.npmjs.com/package/cosmicjs).  Manage your content from your Cosmic Bucket Dashboard.  Simple.

## Getting Started
1. Log in to Cosmic and install the [Simple React Blog template](https://www.cosmicjs.com/apps/simple-react-blog).
2. Run the following commands to install the code locally.
```
git clone https://github.com/cosmicjs/simple-react-blog
cd simple-react-blog
```
#### Environment Variables

1. Create an `.env.local` file to gain API access to your Cosmic Bucket. To do this, run:
```
cp .env.example .env.local
```
2. Find your API access keys at <em>Bucket Settings &gt; API Access</em> and add them to the `.env.local` file. It should look something like this:
```
NEXT_PUBLIC_COSMIC_BUCKET_SLUG=your-bucket-slug
NEXT_PUBLIC_COSMIC_READ_KEY=your-bucket-read-key
```

#### Run in development
Install all dependencies and run in development mode.
```
yarn
yarn dev
```
Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

<p>Use the following button to deploy to <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>. You will need to add API accesss keys as environment variables. Find these in <em>Bucket Settings &gt; API Access</em>.</p>
<p>
<a href="https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/simple-react-blog&env=NEXT_PUBLIC_COSMIC_BUCKET_SLUG,NEXT_PUBLIC_COSMIC_READ_KEY" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>
</p>


## Revision Preview
Follow these steps to add revision preview to your Bucket:
1. [Log in to Cosmic](https://www.cosmicjs.com).
2. Go to <em>Your Bucket > Posts > Object Type Settings</em>.
3. Scroll down to the Preview Link section and add the following link:
```
http://localhost:3000/posts/[object_slug]?revision=[revision_id]
```
4. For production, replace `http://localhost:3000` with your URL.
Now when you "Save as Draft" on any Post, you can preview your changes by clicking the "Preview" link.
<img src="https://cosmic-s3.imgix.net/525f5290-96d5-11e9-86cd-6934fa7afa0f-Screen-Shot-2019-06-24-at-6.10.36-PM.png?w=800" width="300" />
