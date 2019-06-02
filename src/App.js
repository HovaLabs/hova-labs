import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';
import { GlobalStyle, Loading } from './design-system/components';
import { Routes } from './Routes';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Routes />
        </Fragment>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
