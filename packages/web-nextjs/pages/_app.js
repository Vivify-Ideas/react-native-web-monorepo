/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import cookies from 'next-cookies';

import { wrapper } from 'store/web';
import Layout from 'components/shared/layout/Layout';
import authService from 'services/AuthService';
import { getUser } from 'store/actions/UserActions';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const auth = cookies(ctx).user;

    if (auth) {
      authService.createSession({ access_token: auth });
      ctx.store.dispatch(getUser());
    }

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps, hideHeader: Component.hideHeader };
  }

  render() {
    const { Component, pageProps, hideHeader } = this.props;
    return (
      <Layout hideHeader={hideHeader}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default wrapper.withRedux(MyApp);
