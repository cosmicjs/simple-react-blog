# Simple React Blog
<img width="891" alt="Screenshot - Arc - Our Blue Marble - 001147" src="https://github.com/cosmicjs/simple-nextjs-blog/assets/26257029/88043048-c17b-458a-8669-8e878aaf18a2">

### [View Demo](https://cosmic-react-blog.vercel.app)

### React + Next.js + Cosmic
This blog uses Next.js to create a React blog.  It uses Next.js 13 and the new `app` organization structure which takes advantage of [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components). It connects to the Cosmic API via the [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk).

## Getting Started
1. Log in to Cosmic and install the [Simple React Blog template](https://www.cosmicjs.com/marketplace/templates/simple-react-blog).
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
