import React, { useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import { BreakpointContext } from './BreakpointContext';

export function BreakpointProvider({ children }) {
  const theme = useContext(ThemeContext);

  function getCurrentBreakpointKey() {
    // Fall-back to the smallest breakpoint if nothing else matches
    let currentBreakpointKey = Object.keys(theme.breakpoints)[0];
    const breakpointEntries = Object.entries(theme.breakpoints);
    for (let i = 0; i < breakpointEntries.length; i += 1) {
      const [key, value] = breakpointEntries[i];
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
BreakpointProvider.defaultProps = {
  children: undefined
};
BreakpointProvider.propTypes = {
  children: PropTypes.node
};
