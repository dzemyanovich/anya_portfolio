import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home/home';
import NoPage from './pages/noPage';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import ProjectPage from './pages/project-page/project-page';
import EventOptimizer from './pages/event-optimizer/event-optimizer';
import SupplyPlanning from './pages/supply-planning/supply-planning';
import Havi from './pages/havi/havi';
import DesignPlatform from './pages/design-platform/design-platform';
import ZenSupplies from './pages/zensupplies/zensupplies';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='projects/event-optimizer' element={<ProjectPage title="Event" content={<EventOptimizer />} />} />
            <Route path='projects/supply-planning' element={<ProjectPage title="Supply Planning" content={<SupplyPlanning />} />} />
            <Route path='projects/havi' element={<ProjectPage title="Havi" content={<Havi />} />} />
            <Route path='projects/design-platform' element={<ProjectPage title="Design Platform" content={<DesignPlatform />} />} />
            <Route path='projects/zensupplies' element={<ProjectPage title="Zensupplies" content={<ZenSupplies />} />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
