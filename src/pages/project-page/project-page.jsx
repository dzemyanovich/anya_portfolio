import React from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';
import loader from '../../components/loader/loader';

import './project-page.scss';

const isTouchDevice = 'ontouchstart' in window;

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    // need to add 0.5 in case to detect that scroll reached the end.
    // I have not figured out why it happens
    this.magicNumber = 0.5;
    this.projectPageRef = null;
    this.projectWrapperRef = null;

    // TODO: show <HomeLink /> in case it is not content view and scrollRight is maximum
    // TODO: add "swipe down" and "swipe right" arrows
    this.swipeLeftRight = this.swipeLeftRight.bind(this);
    this.swipeUpDown = this.swipeUpDown.bind(this);
    this.scrollDown = this.scrollDown.bind(this);
    this.scrollRight = this.scrollRight.bind(this);

    this.state = {
      isContentView: false,
      isHomeLinkVisible: true,
    };
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    window.scrollTo(0, 0);

    // wait 2 seconds until animation finishes rendering
    loader.start();
    setTimeout(() => {
      if (isTouchDevice) {
        this.projectPageRef.addEventListener('scroll', this.swipeLeftRight);
      } else {
        window.addEventListener('wheel', this.scrollRight, { passive: false });
      }
      loader.end();
    }, 2000);
  }

  componentWillUnmount() {
    if (isTouchDevice) {
      this.projectPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.removeEventListener('scroll', this.swipeUpDown);
    } else {
      window.removeEventListener('wheel', this.scrollRight, { passive: false });
      window.removeEventListener('wheel', this.scrollDown, { passive: false });
    }
  }

  swipeLeftRight() {
    const { projectPageRef } = this;
    const { scrollLeft, offsetWidth, scrollWidth } = projectPageRef;

    if (scrollLeft + offsetWidth + this.magicNumber >= scrollWidth) {
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
    });

    if (window.scrollY === 0) {
      document.removeEventListener('scroll', this.swipeUpDown);
      this.projectPageRef.addEventListener('scroll', this.swipeLeftRight);

      this.setState({
        isContentView: false,
      });
    }
  }

  scrollRight(event) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
    const target = this.projectPageRef;
    target.scrollLeft += move;

    if (target.offsetWidth + target.scrollLeft + this.magicNumber >= target.scrollWidth) {
      window.removeEventListener('wheel', this.scrollRight, { passive: false });
      window.addEventListener('wheel', this.scrollDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  scrollDown(event) {
    // do nothing in case page content is being scrolled
    if (document.querySelector('html').scrollTop !== 0) {
      this.setState({
        isHomeLinkVisible: false,
      });

      return;
    }

    this.setState({
      isHomeLinkVisible: true,
    });

    const projectWrapper = this.projectWrapperRef;
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const { offsetHeight } = projectWrapper;

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
        window.removeEventListener('wheel', this.scrollDown, { passive: false });
        window.addEventListener('wheel', this.scrollRight, { passive: false });

        this.setState({
          isContentView: false,
        });
      }
    }
  }

  render() {
    const { title, header, content, className } = this.props;
    const { isContentView, isHomeLinkVisible } = this.state;

    return (
      <div
        className={`project-page ${isContentView ? 'content-view' : ''} ${className}`}
        ref={el => { this.projectPageRef = el; }}
      >
        <div className="page-title">{title}</div>
        <div className="project-gap" />
        <div className="project-wrapper">{header}</div>
        {!isTouchDevice && (
          <div className="project-wrapper fixed" ref={el => { this.projectWrapperRef = el; }}>
            {isHomeLinkVisible && <HomeLink />}
            {header}
          </div>
        )}
        <div className="content-wrapper">
          {isTouchDevice && isHomeLinkVisible && <HomeLink />}
          {isTouchDevice && (
            <div
              className="project-wrapper"
              ref={el => { this.projectWrapperRef = el; }}
            >
              {header}
            </div>
          )}
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
