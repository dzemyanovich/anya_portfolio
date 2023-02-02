import React from 'react';

import './event-optimizer.scss';
import haviLogo from '../../../images/havi-logo.png';
import eventOptimizerBurger from '../../../images/event-optimizer-burger.jpeg';
import eventOptimizerMockups from '../../../images/event-optimizer-mockups.jpeg';
import eventOptimizerTimeline from '../../../images/event-optimizer-timeline.jpeg';
import eventOptimizerUsers from '../../../images/event-optimizer-users.jpeg';
import eventOptimizerScheme from '../../../images/event-optimizer-scheme.jpeg';
import eventOptimizerPhase from '../../../images/event-optimizer-phase.jpeg';
import eventOptimizerWorkshop from '../../../images/event-optimizer-workshop.jpeg';
import eventOptimizerRelease from '../../../images/event-optimizer-release.jpeg';
import eventOptimizerHavi from '../../../images/event-optimizer-havi.jpeg';

export function EventOptimizer() {
  return [
    <div className="section-container reverse" key="section-1">
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
    <div className="section-container" key="section-2">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section-image-container center-content">
        <img src={eventOptimizerBurger} alt="" className="burger-image transition-image" />
      </div>
    </div>,
    <div className="section-container" key="section-3">
      <img src={eventOptimizerTimeline} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="section-4">
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
    <div className="section-container" key="section-5">
      <img src={eventOptimizerUsers} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="section-6">
      <img src={eventOptimizerScheme} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="section-7">
      <img src={eventOptimizerPhase} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="section-8">
      <div className="section">
        <div className="paragraph">
          <div className="paragraph-title">User interviews</div>
          <div className="paragraph-content">
            Based on the data gathered during the kick-off started validation process of our proto-personas (pains,
            gains, insights), so we decided to conduct in- depth user interviews with end-users (HAVI Supply Planners,
            McD&apos;s Category Managers). I facilitated ten onsite end-user interviews, sorting and analyzing results
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">Workshop</div>
          <div className="paragraph-content">
            After all interviews we understood that the final solution should have different layers of information: we
            had 2 major persona types that were interested in different parts & features of the application. During an
            analysis of interviews, where we gathered similar needs and then, I facilitated a group brainstorming
            session. This process helped generate a greater range of ideas and answers to How-Might-We questions as
            well as helped to uncover great opportunities during the development of CJM
          </div>
        </div>
        <div className="paragraph">
          <div className="paragraph-title">Results</div>
          <div className="paragraph-content">
            Based on the results of workshops & interviews, the feature set, information architecture, and task flows
            for the initial concept were defined. As the next step, I created the draft concept and started a long
            journey of validating it. Several iterations after when all the stakeholders were convinced that the
            solution covers all the key scenarios, it validated with end-users, converted to the development backlog
            <br />
            <br />
            Fast delivery, established contact with a customer, and design process — all of that had an influence on
            the prolongation of the business relations after the first release and ramp-up of the design team up to
            2 FTEs
          </div>
        </div>
      </div>
      <div className="section-image-container">
        <img src={eventOptimizerWorkshop} alt="" className="transition-image" />
      </div>
    </div>,
    <div className="section-container" key="section-9">
      <img src={eventOptimizerRelease} alt="" className="transition-image" />
    </div>,
    <div className="section-container" key="section-10">
      <img src={eventOptimizerHavi} alt="" className="transition-image" />
    </div>,
  ];
}
