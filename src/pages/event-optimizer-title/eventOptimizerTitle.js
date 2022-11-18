import React from 'react';

import './eventOptimizerTitle.css';

function scollRight(event) {
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
        window.location.pathname = '/event-optimizer';
    }
}

class EventOptimizerTitle extends React.Component {
    componentDidMount() {
        window.addEventListener('wheel', scollRight, { passive:false });
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', scollRight);
    }

    render () {
        return (
            <div className="title-wrapper">
                Event Optimizer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        );
    }
}

export default EventOptimizerTitle;
