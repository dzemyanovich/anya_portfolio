import React from 'react';

import image from '../../images/old-computer.png';
// todo: use another image
import epamLogo from '../../images/epam-logo.png';
import aboutImage from '../../images/design-portfolio-hints.jpg';
// todo: use original image but not screenshot
import resultsImage from '../../images/design-portfolio-code.png';
// todo: image's quality is too low
import bottomImage from '../../images/design-portfolio-components.jpg';
import './epam-systems.scss';

export function EpamSystemsHeader() {
  return [
    <img src={image} alt="" className="company-image" key="company-image" />,
    <div className="company-info" key="company-info">
      <h3 className="company-title">About company</h3>
      <div className="company-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut euismod felis. Vivamus pulvinar velit id
        augue tempus imperdiet. Aliquam gravida accumsan est gravida vulputate. Nunc ullamcorper, sapien non
        placerat molestie, ipsum erat laoreet nunc, eget molestie lacus diam vitae elit. Praesent finibus dolor
        sed dolor finibus, ut consequat urna pretium. Duis rhoncus vitae nulla nec bibendum. Vivamus dapibus ornare
        sollicitudin. Maecenas in urna lectus. Morbi tincidunt lobortis augue in congue.
      </div>
    </div>,
  ];
}

export function EpamSystemsContent() {
  return (
    <div>
      <img src={epamLogo} alt="" className="epam-logo" />
      <div className="about-container">
        <div>
          <div>
            <div>Design Platform</div>
            <div className="paragraph-title">
              About project
            </div>
            <div>
              Digital Platform is EPAM&apos;s internal ecosystem, making work and life of employees easier and efficient.
              Currently, the EPAM product ecosystem has more than 150 projects. Supporting such a huge number of
              products seems like an overwhelming task, requiring a huge amount of resources, because each of them
              is unique and must still be perceived as part of one ecosystem. Design Platform is aimed at achieving
              this goal. This initiative is not represented only by a system of components, but by a series of
              measures to change the outlook and the revolution in the organization of work.
            </div>
          </div>
          <div>
            <div className="paragraph-title">Challenges</div>
            <div>
              <ul>
                <li>Lack of consistency between products & various design libraries inside EPAM</li>
                <li>More than 20 stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
        <img src={aboutImage} alt="" className="about-image" />
      </div>
      <div className="results-container">
        <div className="results">
          <div className="paragraph-title">Results</div>
          <div>
            <ul>
              <li>
                Based on competitive benchmarking of popular design systems, upgraded simple UI kit and React
                framework into a scalable design system with guidelines & component editor, consistent & complied
                with EPAM branding. That allows designers and developers to create a user interface 4X faster &
                reduce the costs of the design & development on the streams.
              </li>
              <li>
                Process enhancement based on DesignOps practice helped significantly reduce effort and optimize the
                design team with more than 13 active products from 13 to 3 designers
              </li>
              <li>
                Safe & easy on-boarding/rotation process: newcomers dive into the project&apos;s
                UX/UI ecosystem 7X faster
              </li>
              <li>
                Double-development dropped to zero due to a single source of truth
              </li>
            </ul>
          </div>
        </div>
        <img src={resultsImage} alt="" className="results-image" />
      </div>
      <img src={bottomImage} alt="" className="bottom-image" />
    </div>
  );
}
