import Link from 'next/link';
import cosmic from '../lib/cosmic';
import CosmicLogo from '../components/CosmicLogo';
import Banner from '../components/Banner';
import SiteLogo from '../components/SiteLogo';
import '../styles/globals.css';
import Generator from 'next/font/local';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
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
      <body className='bg-white dark:bg-zinc-950'>
        <Banner />
        <header className='sticky top-0 z-10 mx-auto bg-zinc-50/75 backdrop-blur-lg dark:bg-zinc-950/75' key='headerelement'>
          <SiteLogo siteData={siteData} />
        </header>
        {children}
        <div className='mx-auto mt-8 flex w-full max-w-3xl items-center justify-between px-4 py-4 text-xs md:text-sm lg:px-0 lg:text-base'>
          <a href='https://www.cosmicjs.com' target='_blank' className='no-underline'>
            <div className='flex items-center space-x-2'>
              <CosmicLogo />
              <span className='text-zinc-700 dark:text-zinc-300'>Proudly powered by Cosmic</span>
            </div>
          </a>
          <div className='text-zinc-700 dark:text-zinc-300'>&copy;&nbsp;&nbsp;{new Date().getFullYear()} Cosmic</div>
        </div>
      </body>
    </html>
  );
}
