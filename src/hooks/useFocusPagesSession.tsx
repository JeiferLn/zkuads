'use client'

import { useEffect } from 'react';
import Cookies from 'js-cookie';

export const useFocusPagesSession = (onInvalidSession: () => void) => {
  useEffect(() => {
    const validateSession = () => {
      const accessToken = Cookies.get('access_token');
      if (!accessToken) {
        onInvalidSession();
      }
    };

    validateSession();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        validateSession();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [onInvalidSession]);
};