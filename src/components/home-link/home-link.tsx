import * as React from 'react';

import CustomLink from '../custom-link/custom-link';

import pivunova from '../../images/pivunova-home-link.svg';
import './home-link.scss';

export default function HomeLink() {
  return (
    <CustomLink className="page-link home-link no-underline" to="/">
      <img src={pivunova} className="brand-logo" alt="" />
    </CustomLink>
  );
}
