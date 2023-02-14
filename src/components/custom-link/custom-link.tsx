import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './custom-link.scss';

// todo: declare type instead of any
export default function CustomLink({ to, className, children }: any) {
  const navigate = useNavigate();

  function goTo() {
    if (to.startsWith('https://')) {
      window.open(to);
    } else {
      navigate(to);
    }
  }

  return (
    <div
      role="link"
      tabIndex={0}
      className={`custom-link ${className}`}
      onClick={goTo}
      onKeyDown={goTo}
      // href={to} // todo: linting might require href attribute to be present
    >
      {children}
    </div>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

CustomLink.defaultProps = {
  className: '',
};
