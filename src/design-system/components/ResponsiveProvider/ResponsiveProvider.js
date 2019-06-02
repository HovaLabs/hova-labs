import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { ResponsiveContext } from '../index';

export function ResponsiveProvider({ children }) {
  const theme = useContext(ThemeContext);

  function getCurrentResponsiveKey() {
    // Fall-back to the smallest breakpoint if nothing else matches
    let currentResponsiveKey = Object.keys(theme.breakpoints)[0];
    for (const [key, value] of Object.entries(theme.breakpoints)) {
      if (window.innerWidth >= value) {
        currentResponsiveKey = key;
      }
    }
    return currentResponsiveKey;
  }

  const [responsiveKey, setResponsiveKey] = useState(getCurrentResponsiveKey());

  // componentDidMount
  useEffect(() => {
    function setCurrentResponsiveKey() {
      const newResponsiveKey = getCurrentResponsiveKey();
      setResponsiveKey(newResponsiveKey);
    }
    window.addEventListener('resize', setCurrentResponsiveKey);
    // componentWillUnmount
    return () => {
      window.removeEventListener('resize', setCurrentResponsiveKey);
    };
  });

  const value = useMemo(() => ({ responsiveKey }), [responsiveKey]);
  return <ResponsiveContext.Provider value={value}>{children}</ResponsiveContext.Provider>;
}
