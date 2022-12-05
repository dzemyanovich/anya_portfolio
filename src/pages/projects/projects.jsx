import React from 'react';
import { Link } from 'react-router-dom';

import HomeLink from '../../components/home-link/home-link';
import loader from '../../components/loader/loader';

import supplyPlanning from '../../images/supply-planning.png';
import havi from '../../images/havi.png';
import burger from '../../images/burger.png';
import zensupplies from '../../images/zensupplies.png';
import designPlatform from '../../images/design-platform.png';
import './projects.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.linksContainerRef = null;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // wait 5 sec until animaiton rendering is finished
    loader.start();
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);
      loader.end();
    }, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const linksContainer = this.linksContainerRef;
    const proportion = linksContainer.clientWidth / linksContainer.clientHeight;

    linksContainer.scrollLeft = window.scrollY * proportion;
  }

  render() {
    return (
      <div className="projects-page">
        <HomeLink />
        <div className="links-container" ref={el => { this.linksContainerRef = el; }}>
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
        <div className="projects">
          <div className="image-container">
            <img src={burger} alt="" />
          </div>
          <div className="image-container">
            <img src={supplyPlanning} alt="" />
          </div>
          <div className="image-container">
            <img src={havi} alt="" />
          </div>
          <div className="image-container">
            <img src={designPlatform} alt="" />
          </div>
          <div className="image-container">
            <img src={zensupplies} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
