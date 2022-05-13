# Simple React Blog
![Simple React Blog](https://cosmicjs.com/uploads/76875fe0-af74-11e7-b864-313f959a776e-react-blog-screenshot.png)

### [View Demo](https://cosmicjs.com/apps/simple-react-blog/demo)

### React + Next.js + Cosmic GraphQL
This blog uses Next.js to create a React blog.  It connects to the Cosmic API via GraphQL.  Manage your content from your Cosmic Bucket Dashboard.  Simple.

## Set Up
```
git clone https://github.com/cosmicjs/simple-react-blog
cd simple-react-blog
yarn
```
#### Environment Variables

Refer to `.env.example` which is an example file for you to know what key-value pairs are needed for the API access.

Then, create an `.env` file and copy the key-value pairs to it and then change the values to the API access keys found in your Cosmic dashboard. To do this, run:
```
cp .env.example .env
```

#### Get API Access Keys
[Log in to Cosmic](https://app.cosmicjs.com/login) and get your API access keys located at <em>Bucket Settings &gt; API Access</em>.


#### Run in development
```
yarn run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

<p>Use the following button to deploy to <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">Vercel</a>. You will need to add API accesss keys as environment variables. Find these in <em>Bucket Settings &gt; API Access</em>.</p>
<p>
<a href="https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/simple-react-blog&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY&envDescription=Required%20to%20connect%20the%20app%20with%20Cosmic&envLink=https://vercel.link/cms-cosmic-env" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>
</p>


## Revision Preview
Follow these steps to add revision preview to your Bucket:
1. [Log in to Cosmic](https://www.cosmicjs.com).
2. Go to Your Simple Blog Bucket > Posts > Settings
3. Scroll down to the Preview Link section and add the following link:
```
http://localhost:3000/[object_slug]?revision=[revision_id]
```
4. For production, replace `http://localhost:3000` with your URL.
Now when you "Save as Draft" on any Post, you can preview your changes by clicking the "Preview" link.
<img src="https://cosmic-s3.imgix.net/525f5290-96d5-11e9-86cd-6934fa7afa0f-Screen-Shot-2019-06-24-at-6.10.36-PM.png?w=800" width="300" />
