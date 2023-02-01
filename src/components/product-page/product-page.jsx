import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../home-link/home-link';
import { resetScroll, isTouchDevice } from '../../utils/utils';

import './product-page.scss';

export default function ProductPage({ children }) {
  const [homeLinkVisible, setVisibility] = useState(true);

  useEffect(resetScroll);

  useEffect(() => {
    async function setVisibilityWrapper() {
      const visible = window.scrollY < window.innerHeight;

      // todo: does not work
      setVisibility(visible || true);
    }

    if (isTouchDevice()) {
      window.addEventListener('scroll', setVisibilityWrapper);
    } else {
      window.addEventListener('wheel', setVisibilityWrapper, { passive: false });
    }

    setVisibilityWrapper();
  }, []);

  return (
    <div className="product-page">
      {homeLinkVisible && <HomeLink />}
      {children}
    </div>
  );
}

ProductPage.propTypes = {
  children: PropTypes.element.isRequired,
};
