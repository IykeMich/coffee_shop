'use client';

import { useEffect, ReactNode } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

interface AosWrapperProps {
  children: ReactNode;
}

const AosWrapper: React.FC<AosWrapperProps> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });
  }, []);

  return <>{children}</>;
};

export default AosWrapper;
