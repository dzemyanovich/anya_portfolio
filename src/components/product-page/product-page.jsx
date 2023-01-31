import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../home-link/home-link';
import { resetScroll } from '../../utils/utils';

import './product-page.scss';

export default function ProductPage({ children }) {
  useEffect(resetScroll);

  return (
    <div className="product-page">
      <HomeLink />
      {/* todo: content appears via fade in with delay however e.g. About page works perfectly */}
      {children}
    </div>
  );
}

ProductPage.propTypes = {
  children: PropTypes.element.isRequired,
};
