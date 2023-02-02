import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../home-link/home-link';
import { resetScroll, isTouchDevice } from '../../utils/utils';
import { HOME_LINK_VISIBLE } from '../../utils/global-vars';

import './product-page.scss';

export default function ProductPage({ children }) {
  useEffect(resetScroll);

  const homeLinkRef = useRef(null);

  useEffect(() => {
    async function toggleHomeLink() {
      // class name is hardcoded because it belongs to children elemens
      // todo: store 0.7 in some global var
      const visible = window.scrollY < document.querySelector('.section-container').offsetHeight * HOME_LINK_VISIBLE;

      if (visible) {
        homeLinkRef.current.classList.remove('hide');
      } else {
        homeLinkRef.current.classList.add('hide');
      }
    }

    if (isTouchDevice()) {
      window.addEventListener('scroll', toggleHomeLink);
    } else {
      window.addEventListener('wheel', toggleHomeLink, { passive: false });
    }

    toggleHomeLink();

    return () => {
      window.removeEventListener('scroll', toggleHomeLink);
      window.removeEventListener('wheel', toggleHomeLink, { passive: false });
    };
  }, []);

  return (
    <div className="product-page">
      <div className="home-link-wrapper" ref={homeLinkRef}>
        <HomeLink />
      </div>
      {children}
    </div>
  );
}

ProductPage.propTypes = {
  children: PropTypes.element.isRequired,
};
