import { createBucketClient } from '@cosmicjs/sdk'
const cosmic = createBucketClient({
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || 'simple-react-blog',
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || ''
})
export default cosmic