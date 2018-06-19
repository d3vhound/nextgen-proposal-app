import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'fontello';
              src: url('/static/font/fontello.eot');
              src: url('/static/font/fontello.eot') format('embedded-opentype'),
                  url('/static/font/fontello.woff2') format('woff2'),
                  url('/static/font/fontello.woff') format('woff'),
                  url('/static/font/fontello.ttf') format('truetype'),
                  url('/static/font/fontello.svg') format('svg');
              font-weight: normal;
              font-style: normal;
            }
          `}} />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400italic,300,600%7CRoboto+Slab:400,300,700' rel='stylesheet' type='text/css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}