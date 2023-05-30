import React from 'react';
import SiteLogo from './SiteLogo';
import { GlobalData } from '../lib/types';

export default function Header({ name }: { name: GlobalData }): JSX.Element {
  return (
    <header className='sticky top-0 z-10 mx-auto bg-white/75 backdrop-blur-lg dark:bg-zinc-950/75'>
      <SiteLogo siteData={name} />
    </header>
  );
}
