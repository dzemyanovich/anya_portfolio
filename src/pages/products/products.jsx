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
import './products.scss';

export default class Products extends React.Component {
  constructor(props) {
    super(props);

    this.allCompanyLinksRef = null;
    this.timeoutId = null;

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
      self.allCompanyLinksRef.scrollLeft = 0;

      window.scrollTo(0, 0);
    }, 500);

    // wait 5 sec until animaiton rendering is finished
    noScroll.start();
    this.timeoutId = setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);

      noScroll.end();
    }, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    noScroll.end();

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { clientWidth, clientHeight } = this.allCompanyLinksRef;
    const proportion = clientWidth / clientHeight;

    this.allCompanyLinksRef.scrollLeft = window.scrollY * proportion;
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

  companyLink(text) {
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
      <div className="products-page">
        <HomeLink />
        <div className="all-company-links" ref={el => { this.allCompanyLinksRef = el; }}>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/adidas">
                {this.companyLink('Adidas')}
              </CustomLink>
            </span>
          </div>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/event-optimizer">
                {this.companyLink('Event Optimizer')}
              </CustomLink>
            </span>
          </div>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/supply-planning">
                {this.companyLink('Supply Planning')}
              </CustomLink>
            </span>
          </div>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/havi">
                {this.companyLink('HAVI')}
              </CustomLink>
            </span>
          </div>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/design-platform">
                {this.companyLink('Design Platform')}
              </CustomLink>
            </span>
          </div>
          <div className="company-link-container">
            <span className="company-link">
              <CustomLink className="title" to="/products/zensupplies">
                {this.companyLink('Zensupplies')}
              </CustomLink>
            </span>
          </div>
        </div>
        <div className="company-logos">
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
