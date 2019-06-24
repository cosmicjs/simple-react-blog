# Simple React Blog
![Simple React Blog](https://cosmicjs.com/uploads/76875fe0-af74-11e7-b864-313f959a776e-react-blog-screenshot.png)
### [View Demo](https://cosmicjs.com/apps/simple-react-blog/demo)
### Now includes revision preview support! See [instructions below](#Revisions)
### React + Next.js + GraphQL + Cosmic JS
This blog uses Next.js to create a Universal React blog.  It connects to the Cosmic JS API via GraphQL.  Manage your content from your Cosmic JS Bucket Dashboard.  Simple.
### Getting Started
```
git clone https://github.com/cosmicjs/simple-react-blog
cd simple-react-blog
npm i
```
#### Run in development
```
npm run dev
```
#### Run in production
```
COSMIC_BUCKET=your-bucket-slug npm start
```
Open [http://localhost:3000](http://localhost:3000).

### Cosmic JS
You can easily manage the content in your Simple React Blog website on Cosmic JS.  Cosmic JS makes a great [React CMS](https://cosmicjs.com).  Follow these steps:

1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Create a Bucket.
3. Go to Your Bucket > Apps.
4. Install the [Simple React Blog](https://cosmicjs.com/apps/simple-react-blog).
5. Deploy your Blog to the Cosmic App Server at Your Bucket > Web Hosting.

### Revision Preview
Follow these steps to add revision preview to your Bucket:
1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Go to Your Simple Blog Bucket > Posts > Settings
3. Scroll down to the Preview Link section and add the following link:
```
http://localhost:3000/[object_slug]?revision=[revision_id]
```
4. For production, replace `http://localhost:3000/` with your URL.
Now when you "Save as Draft", you can preview your changes by clicking the "Preview" link on any Post.
