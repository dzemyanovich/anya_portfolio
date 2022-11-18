import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';

import mcdonalds from '../../images/mcdonalds.png';
import havi from '../../images/havi.png';
import burger from '../../images/burger.png';
import zensupplies from '../../images/zensupplies.png';
import designPlatform from '../../images/design_platform.png';
import './projects.css';

const Home = () => {
  return <div className="projects">
      <HomeLink />
      <img src={burger} alt="burger" />
      <Link className="title project-link" to='/event-optimizer-title'>Event Optimizer</Link>
      <img src={mcdonalds} alt="mcdonalds" />
      <Link className="title project-link" to='/supply-planning-title'>Supply Planning</Link>
      <img src={havi} alt="havi" />
      <Link className="title project-link" to='/havi-title'>HAVI</Link>
      <img src={designPlatform} alt="design platform" />
      <Link className="title project-link" to='/design-platform-title'>Design Platform</Link>
      <img src={zensupplies} alt="zensupplies" />
      <Link className="title project-link" to='/zensupplies-title'>Zensupplies</Link>
    </div>;
};

export default Home;
