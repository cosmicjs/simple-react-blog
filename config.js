export default {
  bucket: {
    slug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG || 'simple-react-blog',
    read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY || ''
  }
}