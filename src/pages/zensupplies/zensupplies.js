import React from 'react';
import PropTypes from 'prop-types';

import HomeLink from '../../components/home-link/home-link';

import image from '../../images/zensupplies.png';
import background from '../../images/event-optimizer-background.png';

function Zensupplies() {
    return [
        <ZensuppliesHeader key="page-content-header" />,
        <ZensuppliesHeader key="page-content-header-fixed" fixed={true} />,
        <img key="page-content-background" className="event-optimizer-background" src={background} alt="event optimizer background" />,
    ];
}

class ZensuppliesHeader extends React.Component {
    render() {
        return (
            <div className={`project-wrapper ${this.props.fixed ? 'fixed' : ''}`}>
                {this.props.fixed && <HomeLink />}
                <img src={image} alt="zensupplies" />
                <div className="project-info">
                    <h3 className="project-title">About project</h3>
                    <div className="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
                    </div>
                </div>
            </div>
        );
    }
}

ZensuppliesHeader.propTypes = {  
    fixed: PropTypes.bool,
};

export default Zensupplies;
