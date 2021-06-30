import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';



export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>

            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
        <Html lang="en">
            <Head>
            <link rel="shortcut icon" href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1611744812/Concierge/bmykknhiqk44krgobz6n.png" />
            <meta name="title" content="Good Vibes Entertainment" ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Good Vibes Entertainment is a production house based in New Delhi, offering creative development, video production, photography, and post-production services worldwide."/> 
               
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

  
}