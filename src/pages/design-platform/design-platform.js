import React from 'react';

import HomeLink from '../../components/home-link/home-link';

import image from '../../images/design-platform.png';

function DesignPlatform() {
    return (
        <div className="project-wrapper">
            <HomeLink />
            <img src={image} alt="design platform" />
            <div className="project-info">
                <h3 className="project-title">About project</h3>
                <div className="project-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
                </div>
            </div>
        </div>
    );
}

export default DesignPlatform;
