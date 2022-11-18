import React from 'react';
import PropTypes from 'prop-types';  

import './page-title.css';

function scrollRight(event, pathname) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const target = event.target;
    target.scrollLeft += move;
    // For some reason when "inspect element" panel is closed, the biggest value of "target.offsetWidth + target.scrollLeft"
    // is always at least 0.5 px less than "target.scrollWidth". So scroll end cannot be identified.
    // Cannot figure out why it happens. As result need to add magic number "1" to make functionality work
    if (target.offsetWidth + target.scrollLeft + 1 >= target.scrollWidth) {
        window.location.pathname = pathname;
    }
}

class PageTitle extends React.Component {
    constructor(props) {
        super(props);

        const self = this;

        this.state = {
            addScrollingEvent: (event) => {
                scrollRight(event, self.props.pathname);
            },
        };
    }

    componentDidMount() {
        // hack: sometimes content of the page is not centered
        window.scrollTo(0, 0);

        window.addEventListener('wheel', this.state.addScrollingEvent, { passive:false });
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.state.addScrollingEvent, { passive:false });
    }

    render () {
        return (
            <div className="title-wrapper">
                {this.props.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

PageTitle.propTypes = {  
    title: PropTypes.string.isRequired,  
    pathname: PropTypes.string.isRequired,  
}  

export default PageTitle;
