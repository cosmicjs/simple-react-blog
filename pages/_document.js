import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/style.css" key="cssfile" />
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" key="fontfile"/>
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" key="anotherfontfile"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}