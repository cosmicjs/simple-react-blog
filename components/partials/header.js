import Head from 'next/head'
import React from 'react';
export default class extends React.Component {
  render() {
    return [
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/style.css" key="cssfile" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" key="fontfile"/>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" key="anotherfontfile"/>
        <meta name="viewport" content="width=device-width" key="metaviewp"/>
        <title key="sitetitle">{ this.props.cosmic.post ? this.props.cosmic.post.title + ' |' : '' } Simple React Blog</title>
      </Head>,
      <header className="header" key="headerelement">
        <h1 className="site-title">
          <a href="/">{ this.props.cosmic.global.header.metadata.site_title }</a>
          <small className="site-title__tag">{ this.props.cosmic.global.header.metadata.site_tag }</small>
        </h1>
      </header>
    ]
  }
}