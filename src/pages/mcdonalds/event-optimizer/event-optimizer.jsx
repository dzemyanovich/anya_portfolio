import React from 'react';

import haviLogo from '../../../images/havi-logo.png';
import eventOptimizerBurger from '../../../images/event-optimizer-burger.jpeg';
import eventOptimizerMockups from '../../../images/event-optimizer-mockups.jpeg';
import eventOptimizerTimeline from '../../../images/event-optimizer-timeline.jpeg';
import eventOptimizerUsers from '../../../images/event-optimizer-users.jpeg';

export function EventOptimizer() {
  return [
    <div className="section-container" key="first-section">
      <div className="section-image-container">
        <img src={haviLogo} alt="" className="section-image" />
      </div>
      <div className="section">
        <div className="paragraph">
          <div className="product-title">Event Optimizer</div>
          <div className="paragraph-title">About project</div>
          <div className="paragraph-content">
            Event Optimizer is an information management platform for the Quick-Service Restaurant (QSR) industry
            dedicated to collect, visually track and analyze key data points of McDonald&apos;s & Subway (stock /
            sales / results of previous promotions / inventory / risks, etc.) As a result, the tool provides automated
            intelligent forecasting based on data science. The tool is fully customizable to meet the specific needs
            of a department and company as well as deliver meaningful insights and actionable analytics for suppliers,
            senior management & planners and allows to visualize, analyze and compare data for a better decision-making.
          </div>
        </div>
      </div>
    </div>,
    <div className="section-container" key="second-section">
      <div className="section">
        <div className="paragraph">
          <div className="paragraph-title">My role</div>
          <div className="paragraph-content">
            Design team management (team composition, estimations and roadmap), customer collaboration, ideation &
            alignment, UI/UX-strategy & activities, final delivery, presentation.
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">Product Goals</div>
          <div className="paragraph-content">
            <ul>
              <li>
                Decrease the average time for the full cycle of one event set up (from creation to approval) at least
                twice. The current average duration is 19 days
                <br />
              </li>
              <li>
                Provide a single source of truth for promotions management and as a result reduce the high costs of
                several third-party tools which are currently used
                <br />
              </li>
              <li>
                Provide real-time collaboration between end users since the current manual process does not allow that
                <br />
              </li>
              <li>
                Create a flexible, customizable solution that will support multiple clients (McDonald&apos;s, Subway,
                Burger King)
                <br />
              </li>
              <li>
                Reduce the percentage of failed promotions (not reaching specific KPIs). Currently it equals to 30%
                <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-image-container">
        <img src={eventOptimizerBurger} alt="" className="transition-image" />
      </div>
    </div>,
    <div className="section-container" key="third-section">
      <div className="section">
        <div className="paragraph">
          <div className="product-title">Discovery</div>
          <div className="paragraph-content">
            Due to the complexity of the domain, discovery phase on the client&apos;s side - HQ Chicago, was necessary
            to dive deeply into the environment and analyze goals and everyday tasks & behavior of our users
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">UX activities</div>
          {/* todo: fix alignment when there is not enough content for proper center aligning */}
          <div className="paragraph-content">
            Workshops, contextual inquiry (observation & interviews)
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">UX artefacts</div>
          <div className="paragraph-content">
            Problem Statement, Personas, Customer Journey Mapping, Information Architecture, User Flows, Mind Maps,
            Usability Testing Results, UX Research Report
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">Kick-off & workshops</div>
          <div className="paragraph-content">
            During the series of workshops, we aligned all stakeholders by sharing common goals, vision and objectives.
            Specified measurable success criteria for the project and gathered initial data
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">User interviews</div>
          <div className="paragraph-content">
            Based on the data gathered during the workshops started shaping our user portraits. In order to have a
            powerful overview of a current target audience(pains, gains, insights) as well as validate hypotheses
            and proto- personas, we decided to conduct in-depth user interviews with end-users. I conducted ten
            onsite end-user interviews, facilitating conversations, sorting and analyzing results
          </div>
        </div>
      </div>
      <div className="section-image-container">
        <img src={eventOptimizerMockups} alt="" className="transition-image" />
      </div>
    </div>,
    <div className="section-container" key="fourth-section">
      <img src={eventOptimizerTimeline} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="fifth-section">
      <img src={eventOptimizerUsers} alt="" className="transition-image" />
    </div>,
  ];
}
