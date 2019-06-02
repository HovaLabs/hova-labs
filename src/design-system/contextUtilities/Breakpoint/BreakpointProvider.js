import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { BreakpointContext } from './BreakpointContext';

export function BreakpointProvider({ children }) {
  const theme = useContext(ThemeContext);

  function getCurrentBreakpointKey() {
    // Fall-back to the smallest breakpoint if nothing else matches
    let currentBreakpointKey = Object.keys(theme.breakpoints)[0];
    for (const [key, value] of Object.entries(theme.breakpoints)) {
      if (window.innerWidth >= value) {
        currentBreakpointKey = key;
      }
    }
    return currentBreakpointKey;
  }

  const [BreakpointKey, setBreakpointKey] = useState(getCurrentBreakpointKey());

  // componentDidMount
  useEffect(() => {
    function setCurrentBreakpointKey() {
      const newBreakpointKey = getCurrentBreakpointKey();
      setBreakpointKey(newBreakpointKey);
    }
    window.addEventListener('resize', setCurrentBreakpointKey);
    // componentWillUnmount
    return () => {
      window.removeEventListener('resize', setCurrentBreakpointKey);
    };
  });

  const value = useMemo(() => ({ BreakpointKey }), [BreakpointKey]);
  return <BreakpointContext.Provider value={value}>{children}</BreakpointContext.Provider>;
}
