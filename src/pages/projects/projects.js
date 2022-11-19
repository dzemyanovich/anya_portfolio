import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';

import supplyPlanning from '../../images/supply-planning.png';
import havi from '../../images/havi.png';
import burger from '../../images/burger.png';
import zensupplies from '../../images/zensupplies.png';
import designPlatform from '../../images/design-platform.png';
import './projects.css';

function scrollRight(event) {
  event.preventDefault();
  event.stopPropagation();
  const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
  const linksContainer = document.getElementsByClassName('links-container')[0];
  const proportion = linksContainer.clientWidth / linksContainer.clientHeight;
  linksContainer.scrollLeft += move * proportion;
  document.getElementsByClassName('projects')[0].scrollTop += move;
}

class Home extends React.Component {
  componentDidMount() {
      // hack: sometimes content of the page is not centered
      window.scrollTo(0, 0);

      window.addEventListener('wheel', scrollRight, { passive:false });
  }

  componentWillUnmount() {
      window.removeEventListener('wheel', scrollRight, { passive:false });
  }

  render () {
    return <div>
      <HomeLink />
      <div className="links-container">
        <div className="project-link-container">
          <span>
            <Link className="title" to='/event-optimizer-title'>Event Optimizer</Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to='/supply-planning-title'>Supply Planning</Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to='/havi-title'>HAVI</Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to='/design-platform-title'>Design Platform</Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to='/zensupplies-title'>Zensupplies</Link>
          </span>
        </div>
      </div>
      <div className="projects">
        <div className="image-container">
          <img src={burger} alt="burger" />
        </div>
        <div className="image-container">
          <img src={supplyPlanning} alt="supply planning" />
        </div>
        <div className="image-container">
          <img src={havi} alt="havi" />
        </div>
        <div className="image-container">
          <img src={designPlatform} alt="design platform" />
        </div>
        <div className="image-container">
          <img src={zensupplies} alt="zensupplies" />
        </div>
      </div>
    </div>;
  }
}

export default Home;
