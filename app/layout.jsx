import Link from 'next/link';
import cosmic from '../lib/cosmic';
import CosmicLogo from '../components/CosmicLogo';
import '../styles/globals.css';
import Instrument_Sans from 'next/font/local';

const sans = Instrument_Sans({
  src: '../fonts/InstrumentSans-VariableFont_wdth,wght.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  // Get global data
  let siteData;
  try {
    siteData = (
      await cosmic.objects
        .findOne({
          type: 'globals',
          slug: 'header',
        })
        .props('id,type,slug,title,metadata,created_at')
        .depth(1)
    ).object;
  } catch (error) {
    console.log('Oof', error);
  }
  return {
    title: `${siteData.metadata.site_title}`,
    description: `${siteData.metadata.site_tag}`,
  };
}

export default async function RootLayout({ children }) {
  // Get global data
  let siteData;
  try {
    siteData = (
      await cosmic.objects
        .findOne({
          type: 'globals',
          slug: 'header',
        })
        .props('id,type,slug,title,metadata,created_at')
        .depth(1)
    ).object;
  } catch (error) {
    console.log('Oof', error);
  }
  return (
    <html lang='en' className={`${sans.variable} font-sans`}>
      <head>
        <link rel='stylesheet' type='text/css' href='/static/style.css' key='cssfile' />
        <link href='https://fonts.googleapis.com/css2?family=Instrument+Sans&display=swap' rel='stylesheet' key='fontfile' />
      </head>
      <body className='bg-white dark:bg-zinc-950'>
        <div className='bg-zinc-100 dark:bg-zinc-900 flex justify-center p-2 space-x-1 text-xs md:text-sm lg:text-base'>
          <span className='text-zinc-800 dark:text-zinc-200'>The source code for this blog is</span>
          <a href='https://github.com/cosmicjs/simple-react-blog' target='_parent' className='underline text-green-500 dark:text-green-300'>
            available on GitHub
          </a>
          .
        </div>
        <header className='px-4 lg:px-0 w-full max-w-3xl mx-auto my-8' key='headerelement'>
          <h1 className='flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-baseline'>
            <Link href='/' className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-teal-600 dark:from-cyan-300 dark:to-teal-200'>{siteData.metadata.site_title}</Link>
            <span className='text-lg text-zinc-500 dark:text-zinc-200'>{siteData.metadata.site_tag}</span>
          </h1>
        </header>
        {children}
        <div className='flex w-full max-w-3xl mx-auto justify-between items-center px-4 lg:px-0 py-4 text-xs md:text-sm lg:text-base mt-8'>
            <a href='https://www.cosmicjs.com' target='_blank' className='no-underline'>
              <div className="flex space-x-2 items-center">
              <CosmicLogo />
              <span className='text-zinc-700'>
                Proudly powered by Cosmic
              </span>
              </div>
            </a>
          <div className='text-zinc-700'>&copy;&nbsp;&nbsp;{new Date().getFullYear()} Cosmic</div>
        </div>
      </body>
    </html>
  );
}
