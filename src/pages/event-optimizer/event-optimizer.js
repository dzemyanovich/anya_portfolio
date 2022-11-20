import React from 'react';

import HomeLink from '../../components/home-link/home-link';

import image from '../../images/burger.png';
import background from '../../images/event-optimizer-background.png';
import './event-optimizer.css';

function EventOptimizer() {
    return (
        <div className='event-optimizer'>
            <div className="project-wrapper">
                <HomeLink />
                <img src={image} alt="black burger" />
                <div className="project-info">
                    <h3 className="project-title">About project</h3>
                    <div className="project-description">
                        Event Optimizer is an information management platform for QSR industry dedicated to collect,
                        visually track and analyze key data points of McDonald's & Subway based on data science
                        (marketing / stock / sales / results of previous promotions / risks, etc.) for automated intelligent
                        forecasting. The tool is fully customizable to meet the specific needs of a department and company
                        and ...
                    </div>
                </div>
            </div>
            <img className="event-optimizer-background" src={background} alt="event optimizer background" />
        </div>
    );
}

export default EventOptimizer;
