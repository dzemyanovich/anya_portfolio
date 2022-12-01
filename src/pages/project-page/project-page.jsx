import React from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';

import './project-page.scss';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);

    this.scrollDown = this.scrollDown.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
    this.state = {
      isContentView: false,
    };
    this.projectPageRef = null;
    this.projectWrapperRef = null;
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    window.scrollTo(0, 0);

    // wait 2 seconds until animation finishes rendering
    setTimeout(() => {
      window.addEventListener('wheel', this.scrollRight, { passive: false });
    }, 2000);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.scrollRight, { passive: false });
    window.removeEventListener('wheel', this.scrollDown, { passive: false });
  }

  // TODO: optimize for touch devices
  scrollRight(event) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
    const target = this.projectPageRef;
    target.scrollLeft += move;

    // When "inspect element" panel is closed, the biggest value of "target.offsetWidth + target.scrollLeft"
    // is always at least 0.5 px less than "target.scrollWidth". So scroll end cannot be identified.
    // Cannot figure out why it happens. As result need to add magic number "1" to make functionality work
    if (target.offsetWidth + target.scrollLeft + 1 >= target.scrollWidth) {
      window.removeEventListener('wheel', this.scrollRight, { passive: false });
      window.addEventListener('wheel', this.scrollDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  // TODO: optimize for touch devices
  scrollDown(event) {
    event.preventDefault();
    event.stopPropagation();

    const projectWrapper = this.projectWrapperRef;
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const { offsetHeight } = projectWrapper;

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;

    let newMarginTop = null;
    if ((move > 0 && Math.abs(marginTop) < offsetHeight) || (move < 0 && marginTop < 0)) {
      newMarginTop = marginTop - move;
      if (newMarginTop > 0) {
        newMarginTop = 0;
      }
      projectWrapper.style.marginTop = `${newMarginTop}px`;
    }

    if (newMarginTop === 0) {
      window.removeEventListener('wheel', this.scrollDown, { passive: false });
      window.addEventListener('wheel', this.scrollRight, { passive: false });

      this.setState({
        isContentView: false,
      });
    }
  }

  render() {
    const { title, header, content, className } = this.props;
    const { isContentView } = this.state;

    return (
      <div
        className={`project-page ${isContentView ? 'content-view' : ''} ${className}`}
        ref={el => { this.projectPageRef = el; }}
      >
        <div className="page-title">{title}</div>
        <div className="project-gap" />
        <div className="project-wrapper">{header}</div>
        <div className="project-wrapper fixed" ref={el => { this.projectWrapperRef = el; }}>
          <HomeLink />
          {header}
        </div>
        {content}
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
