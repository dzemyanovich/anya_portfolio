import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to={`/login?returnUrl=${window.location.pathname}`} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
