import React from 'react';

import CustomLink from '../custom-link/custom-link';

import pivunova from '../../images/pivunova.svg';
import './home-link.scss';

function HomeLink() {
  return (
    <CustomLink className="page-link home-link no-underline" to="/">
      <img src={pivunova} alt="" />
    </CustomLink>
  );
}

export default HomeLink;
