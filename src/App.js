import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';
import { GlobalStyle, Loading, ResponsiveProvider } from './design-system/components';
import { Routes } from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
        <Fragment>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </Fragment>
      </ResponsiveProvider>
    </ThemeProvider>
  );
}

export default App;
