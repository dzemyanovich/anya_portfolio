import React from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';
import { isWindows } from '../../utils/utils';

import './project-page.scss';
import swipeLeft from '../../images/swipe-left.svg';
import swipeDown from '../../images/swipe-down.svg';

const isTouchDevice = 'ontouchstart' in window;

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    // need to add 0.5 in case to detect that scroll reached the end.
    // I have not figured out why it happens
    this.MAGIC_NUMBER = 0.5;
    // visible margin for home line and swipe tip
    this.VISIBLE_MARGIN = 100;

    this.projectPageRef = null;
    this.projectWrapperRef = null;
    this.timeoutId = null;

    this.swipeLeftRight = this.swipeLeftRight.bind(this);
    this.swipeUpDown = this.swipeUpDown.bind(this);
    this.scrollUpDown = this.scrollUpDown.bind(this);
    this.scrollLeftRight = this.scrollLeftRight.bind(this);

    this.state = {
      isContentView: false,
      isHomeLinkVisible: false,
      isSwipeTipVisible: false,
    };
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    window.scrollTo(0, 0);

    // wait 2 seconds until animation finishes rendering
    noScroll.start();
    this.timeoutId = setTimeout(() => {
      if (isTouchDevice) {
        this.projectPageRef.addEventListener('scroll', this.swipeLeftRight);
      } else {
        window.addEventListener('wheel', this.scrollLeftRight, { passive: false });
      }

      noScroll.end();
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    noScroll.end();

    if (isTouchDevice) {
      this.projectPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.removeEventListener('scroll', this.swipeUpDown);
    } else {
      window.removeEventListener('wheel', this.scrollLeftRight, { passive: false });
      window.removeEventListener('wheel', this.scrollUpDown, { passive: false });
    }
  }

  swipeLeftRight() {
    const { projectPageRef } = this;
    const { scrollLeft, offsetWidth, scrollWidth } = projectPageRef;

    const visible = scrollLeft + offsetWidth + this.VISIBLE_MARGIN >= scrollWidth;
    this.setState({
      isHomeLinkVisible: visible,
      isSwipeTipVisible: visible,
    });

    if (scrollLeft + offsetWidth + this.MAGIC_NUMBER >= scrollWidth) {
      projectPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.addEventListener('scroll', this.swipeUpDown);

      this.setState({
        isContentView: true,
      });
    }
  }

  swipeUpDown() {
    this.setState({
      isHomeLinkVisible: window.scrollY < this.projectWrapperRef.offsetHeight,
      isSwipeTipVisible: window.scrollY < this.VISIBLE_MARGIN,
    });

    if (window.scrollY === 0) {
      document.removeEventListener('scroll', this.swipeUpDown);
      this.projectPageRef.addEventListener('scroll', this.swipeLeftRight);

      this.setState({
        isContentView: false,
      });
    }
  }

  scrollLeftRight(event) {
    event.preventDefault();
    event.stopPropagation();

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
    const target = this.projectPageRef;

    target.scrollLeft += move;

    this.setState({
      isHomeLinkVisible: target.offsetWidth + target.scrollLeft + this.VISIBLE_MARGIN >= target.scrollWidth,
    });

    if (target.offsetWidth + target.scrollLeft + this.MAGIC_NUMBER >= target.scrollWidth) {
      window.removeEventListener('wheel', this.scrollLeftRight, { passive: false });
      window.addEventListener('wheel', this.scrollUpDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  scrollUpDown(event) {
    const projectWrapper = this.projectWrapperRef;
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const { offsetHeight } = projectWrapper;

    // do nothing in case page content is being scrolled
    if (document.querySelector('html').scrollTop !== 0) {
      // ensure that upper panel is not visible (sometimes it happens)
      if (Math.abs(marginTop) < offsetHeight) {
        projectWrapper.style.marginTop = `${-offsetHeight}px`;
      }

      this.setState({
        isHomeLinkVisible: false,
      });

      return;
    }

    this.setState({
      isHomeLinkVisible: true,
    });

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;

    let newMarginTop = null;
    if ((move > 0 && Math.abs(marginTop) < offsetHeight) || (move < 0 && marginTop < 0)) {
      event.preventDefault();
      event.stopPropagation();

      newMarginTop = marginTop - move;
      if (newMarginTop > 0) {
        newMarginTop = 0;
      }
      projectWrapper.style.marginTop = `${newMarginTop}px`;

      if (newMarginTop === 0) {
        window.removeEventListener('wheel', this.scrollUpDown, { passive: false });
        window.addEventListener('wheel', this.scrollLeftRight, { passive: false });

        this.setState({
          isContentView: false,
        });
      }
    }
  }

  render() {
    const { title, header, content, className } = this.props;
    const { isContentView, isHomeLinkVisible, isSwipeTipVisible } = this.state;

    return (
      <div
        className={`project-page ${isContentView ? 'content-view' : ''} ${className}`}
        ref={el => { this.projectPageRef = el; }}
      >
        <div className={`page-title ${isWindows() ? 'windows' : ''}`}>{title}</div>
        <div className="project-gap" />
        <div className="project-wrapper">{header}</div>
        {isHomeLinkVisible && <HomeLink />}
        {isTouchDevice && isSwipeTipVisible && (
          <div className="swipe-tip">
            {isContentView
              ? <img src={swipeDown} alt="" />
              : <img src={swipeLeft} alt="" />}
          </div>
        )}
        {/* {!isTouchDevice && (
          <div className="project-wrapper fixed" ref={el => { this.projectWrapperRef = el; }}>
            {header}
          </div>
        )} */}
        <div className="content-wrapper">
          {/* {isTouchDevice && ( */}
            <div className="project-wrapper" ref={el => { this.projectWrapperRef = el; }}>
              {header}
            </div>
          {/* )} */}
          {content}
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};

export default ProjectPage;
