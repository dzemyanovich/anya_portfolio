import React from 'react';

import CustomLink from '../../components/custom-link/custom-link';
import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';

import supplyPlanning from '../../images/supply-planning.png';
import havi from '../../images/havi.png';
import burger from '../../images/burger.png';
import zensupplies from '../../images/zensupplies.png';
import designPlatform from '../../images/design-platform.png';
import adidas from '../../images/adidas.jpg';
import './projects.scss';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.linksContainerRef = null;

    this.handleScroll = this.handleScroll.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
      activePageIndex: null,
    };
  }

  componentDidMount() {
    const self = this;

    // hack: sometimes content of the page is not centered
    setTimeout(() => {
      self.linksContainerRef.scrollLeft = 0;

      window.scrollTo(0, 0);
    }, 500);

    // wait 5 sec until animaiton rendering is finished
    noScroll.start();
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);
      noScroll.end();
    }, 5000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const linksContainer = this.linksContainerRef;
    // todo: sometimes this line fails with "Cannot read properties of null (reading 'clientWidth')"
    const proportion = linksContainer.clientWidth / linksContainer.clientHeight;

    linksContainer.scrollLeft = window.scrollY * proportion;
  }

  onMouseEnter(event) {
    function getClassList(target) {
      let classList = '';
      target.classList.forEach((className) => {
        classList = classList.concat(`.${className}`);
      });
      return classList;
    }

    const self = this;
    const elementClassList = getClassList(event.target);
    const parentClassList = getClassList(event.target.parentElement);

    document.querySelectorAll(`${parentClassList} ${elementClassList}`).forEach((el, index) => {
      if (el === event.target) {
        self.setState({
          activePageIndex: index,
        });
      }
    });
  }

  onMouseLeave() {
    this.setState({
      activePageIndex: null,
    });
  }

  projectLink(text) {
    return (
      <span
        className="link-text"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {text}
      </span>
    );
  }

  render() {
    const { activePageIndex } = this.state;

    return (
      <div className="projects-page">
        <HomeLink />
        <div className="links-container" ref={el => { this.linksContainerRef = el; }}>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/adidas">
                {this.projectLink('Adidas')}
              </CustomLink>
            </span>
          </div>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/event-optimizer">
                {this.projectLink('Event Optimizer')}
              </CustomLink>
            </span>
          </div>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/supply-planning">
                {this.projectLink('Supply Planning')}
              </CustomLink>
            </span>
          </div>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/havi">
                {this.projectLink('HAVI')}
              </CustomLink>
            </span>
          </div>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/design-platform">
                {this.projectLink('Design Platform')}
              </CustomLink>
            </span>
          </div>
          <div className="project-link-container">
            <span className="project-link">
              <CustomLink className="title" to="/projects/zensupplies">
                {this.projectLink('Zensupplies')}
              </CustomLink>
            </span>
          </div>
        </div>
        <div className="projects">
          {[adidas, burger, supplyPlanning, havi, designPlatform, zensupplies].map((image, index) => (
            <div
              className={`image-container ${activePageIndex === index ? 'hover' : ''}`}
              key={`image-container-${index.toString()}`}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
