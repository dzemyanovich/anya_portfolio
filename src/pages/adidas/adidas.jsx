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
  constructor(props) {
    super(props);

    this.categories = {
      all: 'All',
      designLeadership: 'Design Leadership',
      productDesign: 'Product Design',
    };

    this.projects = [
      {
        value: 'project #1',
        category: this.categories.designLeadership,
      },
      {
        value: 'project #2',
        category: this.categories.productDesign,
      },
      {
        value: 'project #3',
        category: this.categories.productDesign,
      },
      {
        value: 'project #4',
        category: null,
      },
      {
        value: 'project #5',
        category: this.categories.productDesign,
      },
      {
        value: 'project #6',
        category: null,
      },
      {
        value: 'project #7',
        category: null,
      },
    ];

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
    // todo: do we really need this key?
    const filterPanel = (
      <div className="filter-panel" key="filter-panel">
        {Object.keys(this.categories).map((key) => {
          const value = this.categories[key];

          return (
            <span key={key}>
              <input
                type="radio"
                id={key}
                name="project_category"
                value={value}
                defaultChecked={this.state.currentCategory === value ? 'checked' : false}
                onChange={this.applyFilter}
              />
              <label htmlFor={key}>{value}</label>
            </span>
          );
        })}
      </div>
    );

    return (
      <div className="adidas-wrapper">
        <div className="adidas-content">
          {filterPanel}
          {this.projects
            .filter(project => this.state.currentCategory === this.categories.all || project.category === this.state.currentCategory)
            .map((project, index) =>
                <div className="subproject" key={`project_${index.toString()}`}>{project.value}</div>
            )}
        </div>
      </div>
    );
  }
}
