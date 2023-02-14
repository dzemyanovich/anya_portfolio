import * as React from 'react';
// todo: use types
// import * as PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';
import { isMobile, isWindows, resetScroll, isTouchDevice } from '../../utils/utils';
import { HOME_LINK_VISIBLE } from '../../utils/global-vars';

import './company-page.scss';
import swipeLeft from '../../images/swipe-left.svg';
import swipeDown from '../../images/swipe-down.svg';

export default class CompanyPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    // need to add 0.5 in case to detect that scroll reached the end.
    // I have not figured out why it happens
    this.MAGIC_NUMBER = 0.5;
    // visible margin for home line and swipe tip
    this.VISIBLE_MARGIN = 100;

    this.companyPageRef = null;
    this.companyHeaderRef = null;
    this.timeoutId = null;

    this.swipeLeftRight = this.swipeLeftRight.bind(this);
    this.swipeUpDown = this.swipeUpDown.bind(this);
    this.scrollUpDown = this.scrollUpDown.bind(this);
    this.scrollLeftRight = this.scrollLeftRight.bind(this);

    if (isMobile()) {
      document.addEventListener('scroll', this.swipeUpDown);
    }

    this.state = {
      isLoading: true,
      isContentView: isMobile(),
      isHomeLinkVisible: isMobile(),
      isSwipeTipVisible: false,
    };
  }

  MAGIC_NUMBER: any
  VISIBLE_MARGIN: any
  companyPageRef: any
  companyHeaderRef: any
  timeoutId: any

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    setTimeout(resetScroll, 100);
    // need to invoke twice because sometimes content is not loaded after 100 ms
    setTimeout(resetScroll, 500);

    // wait 2 or 0.5 seconds until animation finishes rendering
    const waitTime = isMobile()
      ? 500
      : 2000;

    noScroll.start();
    this.timeoutId = setTimeout(() => {
      if (isTouchDevice()) {
        this.companyPageRef.addEventListener('scroll', this.swipeLeftRight);
      } else {
        window.addEventListener('wheel', this.scrollLeftRight, { passive: false });
      }

      this.setState({
        isLoading: false,
      });
      noScroll.end();
    }, waitTime);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    noScroll.end();

    if (isTouchDevice()) {
      this.companyPageRef.removeEventListener('scroll', this.swipeLeftRight);
      document.removeEventListener('scroll', this.swipeUpDown);
    } else {
      window.removeEventListener('wheel', this.scrollLeftRight);
      window.removeEventListener('wheel', this.scrollUpDown);
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
    const isHomeLinkVisible = window.scrollY < this.companyHeaderRef.offsetHeight * HOME_LINK_VISIBLE;

    if (isMobile()) {
      this.setState({
        isHomeLinkVisible,
      });

      return;
    }

    this.setState({
      isHomeLinkVisible: window.scrollY < this.companyHeaderRef.offsetHeight * HOME_LINK_VISIBLE,
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

  scrollLeftRight(event: any) {
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
      window.removeEventListener('wheel', this.scrollLeftRight);
      window.addEventListener('wheel', this.scrollUpDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  scrollUpDown(event: any) {
    const { companyHeaderRef } = this;
    const marginTop = parseInt(companyHeaderRef.style.marginTop, 10) || 0;

    this.setState({
      isHomeLinkVisible: Math.abs(marginTop) < companyHeaderRef.offsetHeight * HOME_LINK_VISIBLE,
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
        window.removeEventListener('wheel', this.scrollUpDown);
        window.addEventListener('wheel', this.scrollLeftRight, { passive: false });

        this.setState({
          isContentView: false,
        });
      }
    }
  }

  render() {
    const { title, header, content, className } = this.props;
    const { isLoading, isContentView, isHomeLinkVisible, isSwipeTipVisible } = this.state;
    const hasManyProducts = [
      '/products/adidas',
      '/products/mcdonalds',
      '/products/havi',
    ].includes(window.location.pathname.toLowerCase());

    return (
      <div className="company-page-container">
        {isHomeLinkVisible && <HomeLink />}
        <div
          className={`
          company-page
          ${isContentView ? 'content-view' : ''}
          ${isLoading ? 'no-scroll' : ''}
          ${className}`}
          ref={el => { this.companyPageRef = el; }}
        >
          <div className={`page-title ${isWindows() ? 'windows' : ''}`}>{title}</div>
          <div className="gap" />
          <div className="company-header">{header}</div>
          {isTouchDevice() && isSwipeTipVisible && (
            <div className="swipe-tip">
              {isContentView
                ? <img src={swipeDown} alt="" />
                : <img src={swipeLeft} alt="" />}
            </div>
          )}
          {!isTouchDevice() && !hasManyProducts && (
            <div className="company-header fixed" ref={el => { this.companyHeaderRef = el; }}>
              {header}
            </div>
          )}
          <div className="content-wrapper">
            {(isTouchDevice() || hasManyProducts) && (
              <div className="company-header" ref={el => { this.companyHeaderRef = el; }}>
                {header}
              </div>
            )}
            {content}
          </div>
        </div>
      </div>
    );
  }
}

// CompanyPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   header: PropTypes.element.isRequired,
//   content: PropTypes.element.isRequired,
//   className: PropTypes.string.isRequired,
// };
