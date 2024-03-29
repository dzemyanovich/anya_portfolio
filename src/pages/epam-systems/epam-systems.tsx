import * as React from 'react';

import oldComputer from '../../images/old-computer.png';
import aboutImage from '../../images/design-portfolio-hints.png';
import resultsImage from '../../images/design-portfolio-code.png';
import transitionImage from '../../images/design-portfolio-components.jpeg';

export function EpamSystemsHeader() {
  return (
    <>
      <img src={oldComputer} alt="" className="company-image" />
      <div className="company-info">
        <div className="paragraph-title">About company</div>
        <div className="paragraph-content">
          EPAM Systems is a leading global product development, digital platform engineering, and top digital
          and product design agency. EPAM&apos;s global teams serve customers in more than 35 countries across North
          America, Europe, Asia, and Australia. EPAM was one of only four technology companies to appear on
          Forbes 25 Fastest Growing Public Tech Companies list every year of publication since 2013 and ranked
          as the top IT services company on Fortune&apos;s 100 Fastest-Growing Companies list in 2019 and 2020
        </div>
      </div>
    </>
  );
}

export function EpamSystemsContent() {
  return (
    <div className="company-single-product">
      <div className="section-container">
        <img src={transitionImage} alt="" className="transition-image" />
      </div>
      <div className="section-container">
        <div className="section">
          <div className="paragraph">
            <div className="product-title">Design Platform</div>
            <div className="paragraph-title">
              About product
            </div>
            <div className="paragraph-content">
              Digital Platform is EPAM&apos;s internal ecosystem, making work and life of employees easier and
              efficient. Currently, the EPAM product ecosystem has more than 150 projects. Supporting such a huge
              number of products seems like an overwhelming task, requiring a huge amount of resources, because
              each of them is unique and must still be perceived as part of one ecosystem. Design Platform is
              aimed at achieving this goal. This initiative is not represented only by a system of components,
              but by a series of measures to change the outlook and the revolution in the organization of work.
            </div>
          </div>
          <div className="paragraph">
            <div className="paragraph-title">Challenges</div>
            <div className="paragraph-content">
              <ul>
                <li>Lack of consistency between products & various design libraries inside EPAM</li>
                <li>More than 20 stakeholders</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-image-container">
          <img src={aboutImage} alt="" className="section-image" />
        </div>
      </div>
      <div className="section-container reverse">
        <div className="section-image-container">
          <img src={resultsImage} alt="" className="section-image" />
        </div>
        <div className="section">
          <div className="paragraph">
            <div className="paragraph-title">Results</div>
            <div className="paragraph-content">
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
        </div>
      </div>
    </div>
  );
}
