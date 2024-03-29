import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import './custom-link.scss';

type CustomLink = {
  to: string,
  className?: string,
  children: React.ReactNode,
};

export default function CustomLink({ to, className, children }: CustomLink) {
  const navigate = useNavigate();

  function goTo() {
    if (to.startsWith('https://')) {
      window.open(to);
    } else if (to.startsWith('mailto:')) {
      window.location.href = to;
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
      data-href={to}
    >
      {children}
    </div>
  );
}

CustomLink.defaultProps = {
  className: '',
};
