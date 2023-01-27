import React from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';
import { isWindows, resetScroll } from '../../utils/utils';

import './company-page.scss';
import swipeLeft from '../../images/swipe-left.svg';
import swipeDown from '../../images/swipe-down.svg';

const isTouchDevice = 'ontouchstart' in window;

export default class CompanyPage extends React.Component {
  constructor(props) {
    super(props);

    // need to add 0.5 in case to detect that scroll reached the end.
    // I have not figured out why it happens
    this.MAGIC_NUMBER = 0.5;
    // visible margin for home line and swipe tip
    this.VISIBLE_MARGIN = 100;
    // percentange when home link is still visible related to company header
    this.HOME_LINK_VISIBLE = 0.7;

    this.companyPageRef = null;
    this.companyHeaderRef = null;
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
    setTimeout(resetScroll, 100);
    // need to invoke twice because sometimes content is not loaded after 100 ms
    setTimeout(resetScroll, 500);

    // wait 2 seconds until animation finishes rendering
    noScroll.start();
    this.timeoutId = setTimeout(() => {
      if (isTouchDevice) {
        this.companyPageRef.addEventListener('scroll', this.swipeLeftRight);
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
      this.companyPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.removeEventListener('scroll', this.swipeUpDown);
    } else {
      window.removeEventListener('wheel', this.scrollLeftRight, { passive: false });
      window.removeEventListener('wheel', this.scrollUpDown, { passive: false });
    }
  }

  swipeLeftRight() {
    const { scrollLeft, offsetWidth, scrollWidth } = this.companyPageRef;
    const visible = scrollLeft + offsetWidth + this.VISIBLE_MARGIN >= scrollWidth;

    this.setState({
      isHomeLinkVisible: visible,
      isSwipeTipVisible: visible,
    });

    if (scrollLeft + offsetWidth + this.MAGIC_NUMBER >= scrollWidth) {
      this.companyPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.addEventListener('scroll', this.swipeUpDown);

      this.setState({
        isContentView: true,
      });
    }
  }

  swipeUpDown() {
    this.setState({
      isHomeLinkVisible: window.scrollY < this.companyHeaderRef.offsetHeight * this.HOME_LINK_VISIBLE,
      isSwipeTipVisible: window.scrollY < this.VISIBLE_MARGIN,
    });

    if (window.scrollY === 0) {
      document.removeEventListener('scroll', this.swipeUpDown);
      this.companyPageRef.addEventListener('scroll', this.swipeLeftRight);

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
    const { companyPageRef } = this;

    companyPageRef.scrollLeft += move;

    this.setState({
      isHomeLinkVisible: companyPageRef.offsetWidth + companyPageRef.scrollLeft
        + this.VISIBLE_MARGIN >= companyPageRef.COMMENT_NODEscrollWidth,
    });

    if (companyPageRef.offsetWidth + companyPageRef.scrollLeft + this.MAGIC_NUMBER >= companyPageRef.scrollWidth) {
      window.removeEventListener('wheel', this.scrollLeftRight, { passive: false });
      window.addEventListener('wheel', this.scrollUpDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  scrollUpDown(event) {
    const { companyHeaderRef } = this;
    const marginTop = parseInt(companyHeaderRef.style.marginTop, 10) || 0;

    this.setState({
      isHomeLinkVisible: Math.abs(marginTop) < companyHeaderRef.offsetHeight * this.HOME_LINK_VISIBLE,
    });

    // do nothing in case page content is being scrolled
    if (document.querySelector('html').scrollTop !== 0) {
      // ensure that upper panel is not visible (sometimes it happens)
      if (Math.abs(marginTop) < companyHeaderRef.offsetHeight) {
        companyHeaderRef.style.marginTop = `${-companyHeaderRef.offsetHeight}px`;
      }

      // ensure home link is not visible
      this.setState({
        isHomeLinkVisible: false,
      });

      return;
    }

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;

    let newMarginTop = null;
    if ((move > 0 && Math.abs(marginTop) < companyHeaderRef.offsetHeight) || (move < 0 && marginTop < 0)) {
      event.preventDefault();
      event.stopPropagation();

      newMarginTop = marginTop - move;
      if (newMarginTop > 0) {
        newMarginTop = 0;
      }
      companyHeaderRef.style.marginTop = `${newMarginTop}px`;

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
    const hasManyProducts = [
      '/products/adidas',
      '/products/mcdonalds',
      '/products/havi',
    ].includes(window.location.pathname.toLowerCase());

    return (
      <div
        className={`company-page ${isContentView ? 'content-view' : ''} ${className}`}
        ref={el => { this.companyPageRef = el; }}
      >
        <div className={`page-title ${isWindows() ? 'windows' : ''}`}>{title}</div>
        <div className="gap" />
        <div className="company-header">{header}</div>
        {isHomeLinkVisible && <HomeLink />}
        {isTouchDevice && isSwipeTipVisible && (
          <div className="swipe-tip">
            {isContentView
              ? <img src={swipeDown} alt="" />
              : <img src={swipeLeft} alt="" />}
          </div>
        )}
        {!isTouchDevice && !hasManyProducts && (
          <div className="company-header fixed" ref={el => { this.companyHeaderRef = el; }}>
            {header}
          </div>
        )}
        <div className="content-wrapper">
          {(isTouchDevice || hasManyProducts) && (
            <div className="company-header" ref={el => { this.companyHeaderRef = el; }}>
              {header}
            </div>
          )}
          {content}
        </div>
      </div>
    );
  }
}

CompanyPage.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.element.isRequired,
  content: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
