import React from 'react';
import '../styles/globals.css';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const siteData = await getGlobalData();

  return (
    <html lang='en' className={`${sans.variable} font-sans`}>
      <body className='bg-white dark:bg-zinc-950'>
        <Banner />
        <Header name={siteData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
