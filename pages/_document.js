import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ColorModeScript } from '@chakra-ui/react';

import theme from '../src/theme';

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
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
