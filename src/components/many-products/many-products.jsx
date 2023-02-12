import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from '../custom-link/custom-link';

import './many-products.scss';

export default class ManyProducts extends React.Component {
  constructor(props) {
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

  applyFilter(value) {
    this.setState({
      currentCategory: value,
    });
  }

  render() {
    const { currentCategory } = this.state;
    const { products } = this.props;

    return (
      <div className="many-products-wrapper">
        <div className="many-products-content">
          <div className="filter-panel">
            {Object.keys(this.categories).map((key, index) => {
              const value = this.categories[key];
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
          {products.filter(product => currentCategory === this.categories.all || product.category === currentCategory)
            .map((product, index) => (
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

ManyProducts.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    imageSrc: PropTypes.string,
    category: PropTypes.string,
    year: PropTypes.number.isRequired,
  })).isRequired,
};
