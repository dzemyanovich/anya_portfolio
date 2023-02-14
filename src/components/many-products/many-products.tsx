import * as React from 'react';
// todo: do we need PropTypes when we have TypeScript?
// import * as PropTypes from 'prop-types';

import CustomLink from '../custom-link/custom-link';

import './many-products.scss';

// todo: do not use any
export default class ManyProducts extends React.Component<any, any> {
  constructor(props: any) { // todo: do not use any type
    super(props);

    this.categories = {
      all: 'All',
      ...props.categories,
    };

    this.applyFilter = this.applyFilter.bind(this);

    this.state = {
      currentCategory: this.categories.all,
    };
  }

  categories: any

  // todo: do not use any
  applyFilter(value: any) {
    this.setState({
      currentCategory: value,
    });
  }

  render() {
    const { categories } = this;
    const { currentCategory } = this.state;
    const { products } = this.props;

    return (
      <div className="many-products-wrapper">
        <div className="many-products-content">
          <div className="filter-panel">
            {Object.keys(categories).map((key, index) => {
              const value = categories[key];
              const checked = currentCategory === value;

              return (
                <div
                  className={`filter-option ${checked ? 'checked' : ''}`}
                  key={key}
                  onClick={() => this.applyFilter(value)}
                  role="radio"
                  tabIndex={index}
                  aria-checked={checked}
                  aria-hidden="true"
                >
                  <div className="radio-button" />
                  <div className="radio-label">{value}</div>
                </div>
              );
            })}
          </div>
          {/* todo: do not use any type */}
          {products.filter((product: any) => currentCategory === categories.all || product.category === currentCategory)
            .map((product: any, index: any) => (
              <div className="product-item" key={`product_item_${index.toString()}`}>
                <CustomLink to={product.path}>
                  <div className="product-image-container">
                    {product.imageSrc && <img src={product.imageSrc} alt="" className="product-image" />}
                    {!product.imageSrc && <div className="paragraph-title">No image</div>}
                  </div>
                </CustomLink>
                <div className="product-item-description">
                  <CustomLink to={product.path}>
                    <div>{product.name}</div>
                  </CustomLink>
                  <div>{product.year}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

// todo: use typescript instead
// ManyProducts.propTypes = {
//   categories: PropTypes.objectOf(PropTypes.string).isRequired,
//   products: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     path: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string,
//     category: PropTypes.string,
//     year: PropTypes.number.isRequired,
//   })).isRequired,
// };
