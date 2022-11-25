import React from 'react';
import PropTypes from 'prop-types';

import './project-page.css';

function scrollDown(event) {
    event.preventDefault();
    event.stopPropagation();

    const projectWrapper = document.querySelector('.project-wrapper.fixed');
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const offsetHeight = projectWrapper.offsetHeight;

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

    var newMarginTop = null;
    if (move > 0 && Math.abs(marginTop) < offsetHeight || move < 0 && marginTop < 0) {
        newMarginTop = marginTop - move;
        if (newMarginTop > 0) {
            newMarginTop = 0;
        }
        projectWrapper.style.marginTop = `${newMarginTop}px`;
    }

    if (newMarginTop === 0) {
        window.removeEventListener('wheel', scrollDown, { passive:false });
        window.addEventListener('wheel', scrollRight, { passive:false });

        document.querySelector('.project-page').classList.remove('content-view');
    }
}

function scrollRight(event) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const target = document.querySelector('.project-page');
    target.scrollLeft += move;

    // For some reason when "inspect element" panel is closed, the biggest value of "target.offsetWidth + target.scrollLeft"
    // is always at least 0.5 px less than "target.scrollWidth". So scroll end cannot be identified.
    // Cannot figure out why it happens. As result need to add magic number "1" to make functionality work
    if (target.offsetWidth + target.scrollLeft + 1 >= target.scrollWidth) {
        window.removeEventListener('wheel', scrollRight, { passive:false });
        window.addEventListener('wheel', scrollDown, { passive:false });

        document.querySelector('.project-page').classList.add('content-view');
    }
}

class ProjectPage extends React.Component {
    componentDidMount() {
        // hack: sometimes content of the page is not centered
        window.scrollTo(0, 0);

        window.addEventListener('wheel', scrollRight, { passive:false });
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', scrollRight, { passive:false });
        window.removeEventListener('wheel', scrollDown, { passive:false });
    }

    render () {
        return (
            <div className="project-page">
                <div className="page-title">{this.props.title}</div>
                <div className="project-gap"></div>
                {this.props.content}
            </div>
        );
    }
}

ProjectPage.propTypes = {  
    title: PropTypes.string.isRequired,
    content: PropTypes.element.isRequired,
};

export default ProjectPage;
