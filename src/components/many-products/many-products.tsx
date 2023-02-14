import * as React from 'react';

import CustomLink from '../custom-link/custom-link';

import './many-products.scss';

type ManyProductsProps = {
  categories: { [key: string]: string; },
  products: Product[],
}

type ManyProductsState = {
  currentCategory: string,
}

export default class ManyProducts extends React.Component<ManyProductsProps, ManyProductsState> {
  constructor(props: ManyProductsProps) {
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

  categories: { [key: string]: string; }

  applyFilter(value: string) {
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
          {products.filter((product: Product) => currentCategory === categories.all || product.category === currentCategory)
            .map((product: Product, index: number) => (
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
