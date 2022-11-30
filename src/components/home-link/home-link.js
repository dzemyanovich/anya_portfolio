import React from 'react';
import { Link } from 'react-router-dom';

import pivunova from '../../images/pivunova.svg';
import './home-link.scss';

const HomeLink = () => {
  return <Link className="page-link home-link" to='/'>
    <img src={pivunova} alt="home link" width="24px" />
  </Link>;
};

export default HomeLink;
