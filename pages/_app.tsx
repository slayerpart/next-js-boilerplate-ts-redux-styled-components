import { AppProps as NextAppProps } from 'next/app';
import React from 'react';

import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }: NextAppProps) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
