import * as React from 'react';
import { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { validateToken } from '../../utils/auth';

// todo: do not use any type
export default function ProtectedRoute({ children }: any) {
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

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
