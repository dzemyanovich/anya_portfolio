import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, HashRouter, Routes, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import ProjectPage from './pages/project-page/project-page';
import { EventOptimizerHeader, EventOptimizerContent } from './pages/event-optimizer/event-optimizer';
import { SupplyPlanningHeader, SupplyPlanningContent } from './pages/supply-planning/supply-planning';
import { HaviHeader, HaviContent } from './pages/havi/havi';
import { DesignPlatformHeader, DesignPlatformContent } from './pages/design-platform/design-platform';
import { ZensuppliesHeader, ZensuppliesContent } from './pages/zensupplies/zensupplies';

import './index.scss';
import favicon from './images/smile.svg';

import './fonts/Montserrat-Regular.woff';
import './fonts/Montserrat-Bold.woff';
import './fonts/DrukWide-Medium-Trial.woff';
import './fonts/DrukWide-Bold-Trial.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Favicon url={favicon} />
    {/* TODO: consider switching back to BrowswerRouter */}
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="projects/event-optimizer"
          element={(<ProjectPage
            title="Event Optimizer"
            header={<EventOptimizerHeader />}
            content={<EventOptimizerContent />}
            className="event-optimizer"
          />)}
        />
        <Route
          path="projects/supply-planning"
          element={(<ProjectPage
            title="Supply Planning"
            header={<SupplyPlanningHeader />}
            content={<SupplyPlanningContent />}
            className="supply-planning"
          />)}
        />
        <Route
          path="projects/havi"
          element={(<ProjectPage
            title="Havi"
            header={<HaviHeader />}
            content={<HaviContent />}
            className="havi"
          />)}
        />
        <Route
          path="projects/design-platform"
          element={(<ProjectPage
            title="Design Platform"
            header={<DesignPlatformHeader />}
            content={<DesignPlatformContent />}
            className="design-platform"
          />)}
        />
        <Route
          path="projects/zensupplies"
          element={(<ProjectPage
            title="Zensupplies"
            header={<ZensuppliesHeader />}
            content={<ZensuppliesContent />}
            className="zensupplies"
          />)}
        />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </HashRouter>,
);
