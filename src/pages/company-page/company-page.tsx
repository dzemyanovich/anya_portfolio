import * as React from 'react';

import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';
import { isWindows, resetScroll, isTouchDevice, isMobile } from '../../utils/utils';
import { HOME_LINK_VISIBLE } from '../../utils/global-vars';

import './company-page.scss';

type CompanyPageProps = {
  title: string,
  header: JSX.Element,
  content: JSX.Element,
  className: string,
};

type CompanyPageState = {
  isLoading: boolean,
  isContentView: boolean,
  isHomeLinkVisible: boolean,
};

export default class CompanyPage extends React.Component<CompanyPageProps, CompanyPageState> {
  MAGIC_NUMBER: number;
  VISIBLE_MARGIN: number;
  companyPageRef: HTMLDivElement;
  companyHeaderRef: HTMLDivElement;
  timeoutId: NodeJS.Timeout;

  constructor(props: CompanyPageProps) {
    super(props);

    // need to add 0.5 in case to detect that scroll reached the end.
    // I have not figured out why it happens
    this.MAGIC_NUMBER = 0.5;
    // visible margin for home line
    this.VISIBLE_MARGIN = 100;

    this.companyPageRef = null;
    this.companyHeaderRef = null;
    this.timeoutId = null;

    this.swipeUpDown = this.swipeUpDown.bind(this);
    this.scrollUpDown = this.scrollUpDown.bind(this);
    this.scrollLeftRight = this.scrollLeftRight.bind(this);

    if (isTouchDevice()) {
      document.addEventListener('scroll', this.swipeUpDown);
    }

    this.state = {
      isLoading: true,
      isContentView: isTouchDevice(),
      isHomeLinkVisible: isTouchDevice(),
    };
  }

  componentDidMount() {
    // hack: sometimes content of the page is not centered
    setTimeout(resetScroll, 100);
    // need to invoke twice because sometimes content is not loaded after 100 ms
    setTimeout(resetScroll, 500);

    let waitTime: number;
    if (isTouchDevice()) {
      waitTime = isMobile()
        ? 500 // mobile
        : 2500; // tablet
    } else {
      waitTime = 2000;
    }

    noScroll.start();
    this.timeoutId = setTimeout(() => {
      if (!isTouchDevice()) {
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
      document.removeEventListener('scroll', this.swipeUpDown);
    } else {
      window.removeEventListener('wheel', this.scrollLeftRight);
      window.removeEventListener('wheel', this.scrollUpDown);
    }
  }

  swipeUpDown() {
    const isHomeLinkVisible = window.scrollY < this.companyHeaderRef.offsetHeight * HOME_LINK_VISIBLE;

    this.setState({
      isHomeLinkVisible,
    });
  }

  scrollLeftRight(event: WheelEvent) {
    event.preventDefault();
    event.stopPropagation();

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
      ? event.deltaY
      : event.deltaX;
    const { companyPageRef } = this;

    companyPageRef.scrollLeft += move;

    this.setState({
      isHomeLinkVisible: companyPageRef.offsetWidth + companyPageRef.scrollLeft
        + this.VISIBLE_MARGIN >= companyPageRef.scrollWidth,
    });

    if (companyPageRef.offsetWidth + companyPageRef.scrollLeft + this.MAGIC_NUMBER >= companyPageRef.scrollWidth) {
      window.removeEventListener('wheel', this.scrollLeftRight);
      window.addEventListener('wheel', this.scrollUpDown, { passive: false });

      this.setState({
        isContentView: true,
      });
    }
  }

  scrollUpDown(event: WheelEvent) {
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

    if ((move > 0 && Math.abs(marginTop) < companyHeaderRef.offsetHeight) || (move < 0 && marginTop < 0)) {
      event.preventDefault();
      event.stopPropagation();

      let newMarginTop = marginTop - move;
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
    const { isLoading, isContentView, isHomeLinkVisible } = this.state;
    const hasManyProducts = [
      '/products/adidas',
      '/products/mcdonalds',
      '/products/havi',
    ].includes(window.location.pathname.toLowerCase());

    return (
      <div className={`
        company-page-container
        ${isTouchDevice() ? 'touch-device' : ''}`}
      >
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
          {!hasManyProducts && (
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
