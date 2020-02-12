# Simple React Blog
![Simple React Blog](https://cosmicjs.com/uploads/76875fe0-af74-11e7-b864-313f959a776e-react-blog-screenshot.png)
### [View Demo](https://cosmicjs.com/apps/simple-react-blog/demo)
### Now includes revision preview support! See [instructions below ⬇️](#revision-preview)
### React + Next.js + GraphQL + Cosmic JS
This blog uses Next.js to create a Universal React blog.  It connects to the Cosmic JS API via GraphQL.  Manage your content from your Cosmic JS Bucket Dashboard.  Simple.
### Getting Started
```
git clone https://github.com/cosmicjs/simple-react-blog
cd simple-react-blog
npm i
```
#### Config!
Get your Bucket slug and read key after [logging in to Cosmic JS](https://cosmicjs.com/login) and going to <i>Bucket > Settings > API Keys</i>.

#### Run in development
```
COSMIC_BUCKET=your-bucket-slug COSMIC_READ_KEY=your-bucket-read-key yarn run development
```
#### Run in production
```
COSMIC_BUCKET=your-bucket-slug COSMIC_READ_KEY=your-bucket-read-key yarn start
```
Open [http://localhost:3000](http://localhost:3000).
### Cosmic JS
You can easily manage the content in your Simple React Blog website on Cosmic JS.  Cosmic JS makes a great [React CMS](https://cosmicjs.com).  Follow these steps:

1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Create a Bucket.
3. Install the [Simple React Blog](https://cosmicjs.com/apps/simple-react-blog).
4. Deploy your Blog using your hosting provider of choice. We offer a [Deploy to Web Extension](https://www.cosmicjs.com/extensions/deploy-to-web) to make this easy.

### Revision Preview
Follow these steps to add revision preview to your Bucket:
1. [Log in to Cosmic JS](https://cosmicjs.com).
2. Go to Your Simple Blog Bucket > Posts > Settings
3. Scroll down to the Preview Link section and add the following link:
```
http://localhost:3000/[object_slug]?revision=[revision_id]
```
4. For production, replace `http://localhost:3000` with your URL.
Now when you "Save as Draft" on any Post, you can preview your changes by clicking the "Preview" link.
<img src="https://cosmic-s3.imgix.net/525f5290-96d5-11e9-86cd-6934fa7afa0f-Screen-Shot-2019-06-24-at-6.10.36-PM.png?w=800" width="300" />
