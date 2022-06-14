import React from 'react';
import Link from 'next/link';
export default function Header({ cosmic }){
  return <>
    <div className="source-code-message">
      The source code for this blog is <a href="https://github.com/cosmicjs/simple-react-blog" target="_parent" className="underline">available on GitHub</a>.
    </div>
    <header className="header" key="headerelement">
      <h1 className="site-title">
        <Link href="/">
          <a>{ cosmic.global.header.metadata.site_title }</a>
        </Link>
        <small className="site-title__tag">{ cosmic.global.header.metadata.site_tag }</small>
      </h1>
    </header>
  </>
}