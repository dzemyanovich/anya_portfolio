import * as React from 'react';

import HomeLink from '../../components/home-link/home-link';
import { login } from '../../utils/auth';

import './login.scss';

function getUrlParam(name: string) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

type LoginProps = {
}

type LoginState = {
  password: string,
  loading: boolean,
  error: boolean,
}

export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      password: '',
      loading: false,
      error: false,
    };
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      password: event.currentTarget.value,
      loading: false,
      error: false,
    });
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    const { password } = this.state;
    const self = this;

    this.setState({
      loading: true,
    });
    login(password).then((isPasswordCorrect: boolean) => {
      if (isPasswordCorrect) {
        window.location.href = getUrlParam('returnUrl') || '/products/adidas';
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
        <div className="login-page">
          <form onSubmit={this.handleSubmit}>
            <input
              type="password"
              value={password}
              readOnly={loading}
              onChange={this.handleChange}
              className={`password-input ${error ? 'error' : ''}`}
              placeholder="password"
              // todo: ensure that we can use boolena instead of string
              // autoFocus="autofocus"
              autoFocus={true}
            />
          </form>
        </div>
      </div>
    );
  }
}
