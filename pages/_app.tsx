import React from 'react';
import { AppProps } from 'next/app';
import { AppProvider } from '@app-data';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    );
}

export default MyApp;
