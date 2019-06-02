import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './design-system/theme';
import { GlobalStyle } from './design-system/components';
import { Routes } from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Routes />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
