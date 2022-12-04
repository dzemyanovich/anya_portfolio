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

    // this.scrollRight = this.scrollRight.bind(this);
    // this.getTouches = this.getTouches.bind(this);
    // this.handleTouchStart = this.handleTouchStart.bind(this);
    // this.handleTouchMove = this.handleTouchMove.bind(this);
    // this.touchMove = this.touchMove.bind(this);
    // this.scroll = this.scroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
 
    this.linksContainerRef = null;
    // this.projectsRef = null;

    // this.state = {
    //   xDown: null,
    //   yDown: null,
    // }
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

  // getTouches(evt) {
  //   return evt.touches || // browser API
  //     evt.originalEvent.touches; // jQuery
  // }

  // handleTouchStart(evt) {
  //   const firstTouch = this.getTouches(evt)[0];
  //   this.setState({
  //     xDown: firstTouch.clientX,
  //     yDown: firstTouch.clientY,
  //   });
  // }

  // handleTouchMove(evt) {
  //   // evt.preventDefault();
  //   const { xDown, yDown } = this.state;

  //   if (!xDown || !yDown) {
  //     return;
  //   }

  //   var xUp = evt.touches[0].clientX;
  //   var yUp = evt.touches[0].clientY;

  //   var xDiff = xDown - xUp;
  //   var yDiff = yDown - yUp;

  //   if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
  //     if (xDiff > 0) {
  //       this.scroll(xDiff);
  //       console.log('right swipe', xDiff);
  //     } else {
  //       this.scroll(xDiff);
  //       console.log('left swipe', xDiff);
  //     }
  //   } else {
  //     if (yDiff > 0) {
  //       this.scroll(yDiff);
  //       console.log('down swipe', yDiff);
  //     } else {
  //       this.scroll(yDiff);
  //       console.log('up swipe', yDiff);
  //     }
  //   }
  //   /* reset values */
  //   this.setState({
  //     xDown: null,
  //     yDown: null,
  //   });
  // }

  // scroll(move) {
  //   const linksContainer = this.linksContainerRef;
  //   const proportion = linksContainer.clientWidth / linksContainer.clientHeight;
  //   const projects = this.projectsRef;

  //   projects.scrollTop += move;
  //   linksContainer.scrollLeft = projects.scrollTop * proportion;
  // }

  // scrollRight(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
  //     ? event.deltaY
  //     : event.deltaX;

  //   this.scroll(move);
  // }

  // touchMove(evt) {
  //   const { xDown, yDown } = this.state;

  //   var xUp = evt.touches[0].clientX;
  //   var yUp = evt.touches[0].clientY;

  //   var xDiff = xDown - xUp;
  //   var yDiff = yDown - yUp;

  //   const e = document.createEvent('TouchEvent');
  //   // e.touches = [{ pageX: xDiff, pageY: yDiff }];

  //   const e1 = cloneEvent(evt);
  //   this.projectsRef.dispatchEvent(e1);
  // }

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
