import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

export default function UnauthenticatedRouteOnly({ children }) {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  return children;
}

UnauthenticatedRouteOnly.propTypes = {
  children: PropTypes.element.isRequired,
};
