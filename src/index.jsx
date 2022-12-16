import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import Favicon from 'react-favicon';

import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import ProjectPage from './pages/project-page/project-page';
import { AdidasHeader, AdidasContent } from './pages/adidas/adidas';
import { EventOptimizerHeader, EventOptimizerContent } from './pages/event-optimizer/event-optimizer';
import { SupplyPlanningHeader, SupplyPlanningContent } from './pages/supply-planning/supply-planning';
import { HaviHeader, HaviContent } from './pages/havi/havi';
import { DesignPlatformHeader, DesignPlatformContent } from './pages/design-platform/design-platform';
import { ZensuppliesHeader, ZensuppliesContent } from './pages/zensupplies/zensupplies';

import './index.scss';
import favicon from './images/favicon.svg';

import './fonts/Montserrat-Regular.woff';
import './fonts/Montserrat-Bold.woff';
import './fonts/DrukWide-Medium-Trial.woff';
import './fonts/DrukWide-Bold-Trial.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // BrowserRouter is not recommended to be used for Amazon S3
  // more info - https://stackoverflow.com/questions/51218979/react-router-doesnt-work-in-aws-s3-bucket
  <BrowserRouter>
    <Favicon url={favicon} />
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="projects/adidas"
          element={(<ProjectPage
            title="Adidas"
            header={<AdidasHeader />}
            content={<AdidasContent />}
            className="adidas"
          />)}
        />
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
  </BrowserRouter>,
);
