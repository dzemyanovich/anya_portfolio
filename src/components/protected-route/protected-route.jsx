import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { validateToken } from '../../utils/auth';

export default class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidToken: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    const isValidToken = await validateToken();

    this.setState({
      isValidToken,
      isLoading: false,
    });
  }

  render() {
    const { isLoading, isValidToken } = this.state;
    const { children } = this.props;

    if (isLoading) {
      return null;
    }

    if (!isValidToken) {
      return <Navigate to={`/login?returnUrl=${window.location.pathname}`} replace />;
    }

    return children;
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
