import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';

import supplyPlanning from '../../images/supply-planning.png';
import havi from '../../images/havi.png';
import burger from '../../images/burger.png';
import zensupplies from '../../images/zensupplies.png';
import designPlatform from '../../images/design-platform.png';
import './projects.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.scrollRight = this.scrollRight.bind(this);
    this.linksContainerRef = null;
    this.projectsRef = null;
  }

  // TODO: optimize for touch devices
  scrollRight(event) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const linksContainer = this.linksContainerRef;
    const proportion = linksContainer.clientWidth / linksContainer.clientHeight;
    const projects = this.projectsRef;

    projects.scrollTop += move;
    linksContainer.scrollLeft = projects.scrollTop * proportion;
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    window.scrollTo(0, 0);

    // wait 5 sec until animaiton rendering is finished
    setTimeout(() => {
      window.addEventListener('wheel', this.scrollRight, { passive:false });
    }, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.scrollRight, { passive:false });
  }

  render () {
    return <div className="projects-page">
      <HomeLink />
      <div className="links-container" ref={el => this.linksContainerRef = el}>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to="/projects/event-optimizer">
              <span className="link-text">Event Optimizer</span>
            </Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to="/projects/supply-planning">
              <span className="link-text">Supply Planning</span>
            </Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to="/projects/havi">
              <span className="link-text">HAVI</span>
            </Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to="/projects/design-platform">
              <span className="link-text">Design Platform</span>
            </Link>
          </span>
        </div>
        <div className="project-link-container">
          <span className="project-link">
            <Link className="title" to="/projects/zensupplies">
              <span className="link-text">Zensupplies</span>
            </Link>
          </span>
        </div>
      </div>
      <div className="projects" ref={el => this.projectsRef = el}>
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
