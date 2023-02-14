import * as React from 'react';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { validateToken } from '../../utils/auth';

type ProtectedRoute = {
  children: React.ReactNode,
}

export default function ProtectedRoute({ children }: ProtectedRoute): JSX.Element {
  const [isValidToken, initValidToken] = useState(null);
  const [isLoading, initLoading] = useState(true);

  useEffect(() => {
    async function validateTokenWrapper() {
      const isValidTokenValue = await validateToken();
      initValidToken(isValidTokenValue);
      initLoading(false);
    }

    validateTokenWrapper();
  }, []);

  if (isLoading) {
    return null;
  }

  if (!isValidToken) {
    return <Navigate to={`/login?returnUrl=${window.location.pathname}`} replace />;
  }

  return children as JSX.Element;
}
