import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { validateToken } from '../../utils/auth';

export default class ProtectedRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidToken: null,
    };
  }

  async componentDidMount() {
    // todo: validation happens each time user enters page
    const isValidToken = await validateToken();

    this.setState({
      isValidToken,
    });
  }

  render() {
    const { isValidToken } = this.state;
    const { children } = this.props;

    // todo: think about more elegant way
    if (isValidToken === null) {
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
