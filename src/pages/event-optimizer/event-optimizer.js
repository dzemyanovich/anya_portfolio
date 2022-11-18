import React from 'react';

import './event-optimizer.css';
import burgerImage from '../../images/burger.png';

function EventOptimizer() {
    return (
        <div className="project-wrapper">
            <img src={burgerImage} width="521px" alt="black burger" />
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
    );
}

export default EventOptimizer;
