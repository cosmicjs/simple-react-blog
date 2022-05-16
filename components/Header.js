import React from 'react';
import Link from 'next/link';
export default function Header({ cosmic }){
  return <header className="header" key="headerelement">
    <h1 className="site-title">
      <Link href="/">
        <a>{ cosmic.global.header.metadata.site_title }</a>
      </Link>
      <small className="site-title__tag">{ cosmic.global.header.metadata.site_tag }</small>
    </h1>
  </header>
}