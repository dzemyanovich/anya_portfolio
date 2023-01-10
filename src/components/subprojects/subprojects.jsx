import React from 'react';
import PropTypes from 'prop-types';

import './subprojects.scss';

export default class Subprojects extends React.Component {
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
    const { projects } = this.props;

    return (
      <div className="subprojects-wrapper">
        <div className="subprojects-content">
          <div className="filter-panel">
            {Object.keys(this.categories).map((key) => {
              const value = this.categories[key];

              return (
                <span className="filter-option" key={key}>
                  <input
                    type="radio"
                    id={key}
                    name="project_category"
                    value={value}
                    defaultChecked={currentCategory === value ? 'checked' : false}
                    onChange={this.applyFilter}
                  />
                  <label htmlFor={key}>{value}</label>
                </span>
              );
            })}
          </div>
          {projects.filter(project => currentCategory === this.categories.all || project.category === currentCategory)
            .map((project, index) => (
              <div className="subproject" key={`subproject_${index.toString()}`}>{project.value}</div>
            ))}
        </div>
      </div>
    );
  }
}

Subprojects.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    category: PropTypes.string,
  })).isRequired,
};
