import React from 'react';
import { Link } from 'react-router-dom';

import pivunova from '../../images/pivunova.svg';
import './home-link.scss';

function HomeLink() {
  return (
    <Link className="page-link home-link" to="/">
      <img src={pivunova} alt="" />
    </Link>
  );
}

export default HomeLink;
