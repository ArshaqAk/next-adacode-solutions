import Document, { Html, Head, Main, NextScript } from 'next/document';
import Layout from '../components/Layout';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pathname: ctx.pathname };
  }

  render() {
    const isHome = this.props.pathname === '/';

    return (
      <Html>
        <Head />
        <body>
          {!isHome && <Layout><Main /></Layout>}
          {isHome && <Main />}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
