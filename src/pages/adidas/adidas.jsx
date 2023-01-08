import React from 'react';

import './adidas.scss';
import image from '../../images/adidas.jpg';

export function AdidasHeader() {
  return [
    <img src={image} alt="" className="project-image" key="project-image" />,
    <div className="project-info" key="project-info">
      <h3 className="project-title">About project</h3>
      <div className="project-description">
        Event Optimizer is an information management platform for QSR industry dedicated to collect,
        visually track and analyze key data points of McDonald&apos;s & Subway based on data science
        (marketing / stock / sales / results of previous promotions / risks, etc.) for automated intelligent
        forecasting. The tool is fully customizable to meet the specific needs of a department and company
        and F...
      </div>
    </div>,
  ];
}

export class AdidasContent extends React.Component {
  applyFilter(a, b, c) {
    debugger;
    // todo: add handler
  }

  render() {
    return (
      <div className="adidas-content">
        <div>
          <div className="subproject">project #1</div>
          <div className="subproject">project #3</div>
          <div className="subproject">project #5</div>
        </div>
        <div>
          <div className="filter-panel">
            <span>
              <input type="radio" id="all" name="project_category" value="All" defaultChecked="checked" onChange={this.applyFilter} />
              <label htmlFor="all">All</label>
            </span>
            <span>
              <input type="radio" id="design_leadership" name="project_category" value="Design Leadership" onChange={this.applyFilter} />
              <label htmlFor="design_leadership">Design Leadership</label>
            </span>
            <span>
              <input type="radio" id="product_design" name="project_category" value="Product Design" onChange={this.applyFilter} />
              <label htmlFor="product_design">Product Design</label>
            </span>
          </div>
          <div className="subproject">project #2</div>
          <div className="subproject">project #4</div>
          <div className="subproject">project #6</div>
        </div>
      </div>
    );
  }
}
