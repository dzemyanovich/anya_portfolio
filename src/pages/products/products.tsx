import * as React from 'react';

import CustomLink from '../../components/custom-link/custom-link';
import HomeLink from '../../components/home-link/home-link';
import noScroll from '../../utils/no-scroll';
import { resetScroll, isMobile } from '../../utils/utils';

import adidasShoe from '../../images/adidas-shoe.jpg';
import burger from '../../images/burger.png';
import haviLogo from '../../images/havi-logo.png';
import oldComputer from '../../images/old-computer.png';
import tooth from '../../images/tooth.png';
import './products.scss';

type ProductsProps = {
};

type ProductsState = {
  activePageIndex?: number,
};

type Company = {
  name: string,
  link: string,
  image: string,
};

export default class Products extends React.Component<ProductsProps, ProductsState> {
  allCompanyLinksRef: HTMLDivElement;
  timeoutId: NodeJS.Timeout;

  constructor(props: ProductsProps) {
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

      resetScroll();
    }, 500);

    // wait 5 or 1 seconds until animation finishes rendering
    const waitTime = isMobile()
      ? 1000
      : 5000;

    noScroll.start();
    this.timeoutId = setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);

      noScroll.end();
    }, waitTime);
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

  onMouseEnter(event: React.MouseEvent<HTMLElement>) {
    function getClassList(target: HTMLElement) {
      let classList = '';
      target.classList.forEach((className: string) => {
        classList = classList.concat(`.${className}`);
      });
      return classList;
    }

    const self = this;
    const htmlElement: HTMLElement = event.target as HTMLElement;
    const elementClassList = getClassList(htmlElement);
    const parentClassList = getClassList(htmlElement.parentElement);

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

  companyLink(text: string) {
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
    const companies: Company[] = [
      {
        name: 'Adidas',
        link: '/products/adidas',
        image: adidasShoe,
      },
      {
        name: "McDonald's",
        link: '/products/mcdonalds',
        image: burger,
      },
      {
        name: 'HAVI',
        link: '/products/havi',
        image: haviLogo,
      },
      {
        name: 'EPAM Systems',
        link: '/products/epam-systems',
        image: oldComputer,
      },
      {
        name: 'Zensupplies',
        link: '/products/zensupplies',
        image: tooth,
      },
    ];

    return (
      <div className="products-page-container">
        <HomeLink />
        <div className="products-page">
          <div className="all-company-links" ref={el => { this.allCompanyLinksRef = el; }}>
            {companies.map((company: Company, index: number) => (
              <div className="company-link-container" key={`company-link-${index.toString()}`}>
                <span className="company-link">
                  <CustomLink className="title" to={company.link}>
                    {this.companyLink(company.name)}
                  </CustomLink>
                </span>
              </div>
            ))}
          </div>
          <div className="company-logos">
            {companies.map((company, index) => (
              <div
                className={`image-container ${activePageIndex === index ? 'hover' : ''}`}
                key={`image-container-${index.toString()}`}
              >
                <img src={company.image} alt="" className="company-logo-item" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
