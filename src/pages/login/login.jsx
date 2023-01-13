import React from 'react';

import HomeLink from '../../components/home-link/home-link';
import { login } from '../../utils/auth';

import './login.scss';

function getUrlParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      password: '',
    };
  }

  handleChange(event) {
    this.setState({
      password: event.target.value,
      loading: false,
      error: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { password } = this.state;
    const self = this;

    this.setState({
      loading: true,
    });
    login(password).then((isPasswordCorrect) => {
      if (isPasswordCorrect) {
        window.location.href = getUrlParam('returnUrl') || '/projects/adidas';
      } else {
        self.setState({
          error: true,
          loading: false,
        });
        setTimeout(() => {
          self.setState({
            error: false,
          });
        }, 1000);
      }
    });
  }

  render() {
    const { password, loading, error } = this.state;

    return (
      <div className="login-container">
        <HomeLink />
        <form onSubmit={this.handleSubmit}>
          <input
            type="password"
            value={password}
            readOnly={loading}
            onChange={this.handleChange}
            className={`password-input ${error ? 'error' : ''}`}
            placeholder="password"
            autoFocus="autofocus"
          />
        </form>
      </div>
    );
  }
}
