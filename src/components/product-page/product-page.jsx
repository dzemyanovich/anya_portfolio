import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../home-link/home-link';
import { resetScroll } from '../../utils/utils';

import './product-page.scss';

// todo: about page blinks while browsing on mobile (just keep reloading the page)

// todo: show/hide home link on product and company pages faster

// todo: in terms of fade in, company page with single product works perfectly (e.g. epam systems page and zensupplies)

// todo: consider removing animation for mobile devices

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
