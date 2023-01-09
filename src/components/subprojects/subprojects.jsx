import React from 'react';

import './subprojects.scss';

export class Subprojects extends React.Component {
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
    return (
      <div className="subprojects-wrapper">
        <div className="subprojects-content">
          <div className="filter-panel">
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
          {this.projects
            .filter(project => this.state.currentCategory === this.categories.all
              || project.category === this.state.currentCategory)
            .map((project, index) =>
              <div className="subproject" key={`subproject_${index.toString()}`}>{project.value}</div>
            )}
        </div>
      </div>
    );
  }
}
