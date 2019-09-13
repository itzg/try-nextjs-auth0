import React from 'react';
import App from 'next/app';
import UserContext, {loadUser} from "../components/UserContext";

class MyApp extends App {

  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);

    const user = await loadUser(appContext.ctx);

    return {...appProps, user}
  }

  render() {
    const {Component, pageProps, user} = this.props;

    return (
        <UserContext.Provider value={user}>
          <Component {...pageProps} />
        </UserContext.Provider>
    )
  }
}

export default MyApp;