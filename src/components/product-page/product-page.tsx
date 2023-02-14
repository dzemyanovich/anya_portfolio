import * as React from 'react';
import { useEffect, useRef } from 'react';

import HomeLink from '../home-link/home-link';
import { resetScroll, isTouchDevice } from '../../utils/utils';
import { HOME_LINK_VISIBLE } from '../../utils/global-vars';

import './product-page.scss';

type ProductPage = {
  children: React.ReactNode,
}

export default function ProductPage({ children }: ProductPage) {
  useEffect(resetScroll);

  const homeLinkRef = useRef(null);

  useEffect(() => {
    async function toggleHomeLink() {
      // class name is hardcoded because it belongs to children elemens
      const sectionContainer: HTMLElement  = document.querySelector<HTMLElement>('.section-container');
      const visible = window.scrollY < sectionContainer.offsetHeight * HOME_LINK_VISIBLE;

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
      window.removeEventListener('wheel', toggleHomeLink);
    };
  }, []);

  return (
    <div className="product-page-container">
      <div className="home-link-wrapper" ref={homeLinkRef}>
        <HomeLink />
      </div>
      <div className="product-page">
        {children}
      </div>
    </div>
  );
}
