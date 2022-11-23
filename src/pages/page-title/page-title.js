import React from 'react';
import PropTypes from 'prop-types';  

import image from '../../images/burger.png';
import background from '../../images/event-optimizer-background.png';
import './page-title.css';

function scrollDown(event) {
    event.preventDefault();
    event.stopPropagation();

    const projectWrapper = document.querySelector('.project-wrapper.fixed');
    const marginTop = parseInt(projectWrapper.style.marginTop, 10) || 0;
    const offsetHeight = document.querySelector('.project-wrapper.fixed').offsetHeight;

    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;

    var newValue = null;
    if (move > 0 && Math.abs(marginTop) < offsetHeight || move < 0 && marginTop < 0) {
        newValue = marginTop - move;
        if (newValue > 0) {
            newValue = 0;
        }
        projectWrapper.style.marginTop = `${newValue}px`;
    }

    if (newValue === 0) {
        console.log('reverse');
        window.removeEventListener('wheel', scrollDown, { passive:false });

        document.querySelector('.event-optimizer-background').classList.remove('visible');
        document.querySelector('.project-wrapper.fixed').classList.add('invisible');

        window.addEventListener('wheel', scrollRight, { passive:false });
    }
}

function scrollRight(event) {
    event.preventDefault();
    event.stopPropagation();
    const move = Math.abs(event.deltaY) > Math.abs(event.deltaX)
        ? event.deltaY
        : event.deltaX;
    const target = document.querySelector('.title-wrapper');
    target.scrollLeft += move;

    // For some reason when "inspect element" panel is closed, the biggest value of "target.offsetWidth + target.scrollLeft"
    // is always at least 0.5 px less than "target.scrollWidth". So scroll end cannot be identified.
    // Cannot figure out why it happens. As result need to add magic number "1" to make functionality work
    if (target.offsetWidth + target.scrollLeft + 1 >= target.scrollWidth) {
        window.removeEventListener('wheel', scrollRight, { passive:false });
        document.querySelector('.event-optimizer-background').classList.add('visible');
        document.querySelector('.project-wrapper.fixed.invisible').classList.remove('invisible');
        window.addEventListener('wheel', scrollDown, { passive:false });
    }
}

class PageTitle extends React.Component {
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
            <div className="title-wrapper">
                <div className="page-title">{this.props.title}</div>
                <div className="project-wrapper">
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
                <div className="project-wrapper fixed invisible">
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

PageTitle.propTypes = {  
    title: PropTypes.string.isRequired,
}  

export default PageTitle;
