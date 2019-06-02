import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';
import { GlobalStyle, Loading } from './design-system/components';
import { BreakpointProvider } from './design-system/contextUtilities';
import { Routes } from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BreakpointProvider>
        <Fragment>
          <GlobalStyle />
          <Suspense fallback={<Loading />}>
            <Routes />
          </Suspense>
        </Fragment>
      </BreakpointProvider>
    </ThemeProvider>
  );
}

export default App;
