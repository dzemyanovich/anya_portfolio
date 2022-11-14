import React from 'react';

import './eventOptimizerTitle.css';

function EventOptimizerTitle() {
    window.addEventListener('wheel', event => {
        event.preventDefault();
        event.stopPropagation();
        const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
            ? event.deltaY
            : event.deltaX;
        event.target.scrollLeft += move;
    }, { passive:false });

    return (
        <div className="title-wrapper">
            Event Optimizer
        </div>
    );
}

export default EventOptimizerTitle;
