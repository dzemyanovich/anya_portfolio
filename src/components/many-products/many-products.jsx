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

  applyFilter(element) {
    this.setState({
      currentCategory: element.target.value,
    });
  }

  render() {
    const { currentCategory } = this.state;
    const { products } = this.props;

    return (
      <div className="many-products-wrapper">
        <div className="many-products-content">
          <div className="filter-panel">
            {Object.keys(this.categories).map((key) => {
              const value = this.categories[key];

              return (
                <span className="filter-option" key={key}>
                  <input
                    type="radio"
                    id={key}
                    name="product_category"
                    value={value}
                    defaultChecked={currentCategory === value ? 'checked' : false}
                    onChange={this.applyFilter}
                  />
                  <label htmlFor={key}>{value}</label>
                </span>
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
