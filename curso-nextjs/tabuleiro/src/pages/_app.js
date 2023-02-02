import React from 'react';
import globals from '../app/globals.css'

export default function App({ Component, pageProps }) {
      return (
            <Component {...pageProps} />
      );
    }