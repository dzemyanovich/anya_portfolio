import React from 'react';

import HomeLink from '../../components/home-link/home-link';

import image from '../../images/burger.png';
import background from '../../images/event-optimizer-background.png';
import './event-optimizer.css';

function scrollDown(event) {
    event.preventDefault();
    event.stopPropagation();

    const projectWrapper = document.querySelector('.event-optimizer .project-wrapper');
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const offsetHeight = document.querySelector('.project-wrapper').offsetHeight;

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

    if (move > 0 && Math.abs(marginTop) < offsetHeight || move < 0 && marginTop < 0) {
        var newValue = marginTop - move;
        if (newValue > 0) {
            newValue = 0;
        }
        projectWrapper.style.marginTop = `${newValue}px`;
    }
}

class EventOptimizer extends React.Component {
    componentDidMount() {  
        window.addEventListener('wheel', scrollDown, { passive:false });
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', scrollDown, { passive:false });
    }

    render() {
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
}

export default EventOptimizer;
