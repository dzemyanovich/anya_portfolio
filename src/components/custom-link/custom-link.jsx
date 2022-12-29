import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './custom-link.scss';

function CustomLink({ to, className, children }) {
  const navigate = useNavigate();

  function goTo() {
    navigate(to);
  }

  return (
    <span
      role="link"
      tabIndex={0}
      className={`custom-link ${className}`}
      onClick={goTo}
      onKeyDown={goTo}
      href={to}
    >
      {children}
    </span>
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

export default CustomLink;
