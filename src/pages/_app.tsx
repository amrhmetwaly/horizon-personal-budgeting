import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {

  // You can add global layout components or providers here
  return (
    <React.Fragment>
      {/* Add any global components, like a navbar or footer, here */}
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
