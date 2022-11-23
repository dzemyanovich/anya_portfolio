import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home/home';
import NoPage from './pages/noPage';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import PageTitle from './pages/page-title/page-title';
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
            <Route path='event-optimizer-title' element={<PageTitle title="Event" pathname="/event-optimizer" />} />
            <Route path='event-optimizer' element={<EventOptimizer />} />
            <Route path='supply-planning-title' element={<PageTitle title="Supply Planning" pathname="/supply-planning" />} />
            <Route path='supply-planning' element={<SupplyPlanning />} />
            <Route path='havi-title' element={<PageTitle title="Havi" pathname="/havi" />} />
            <Route path='havi' element={<Havi />} />
            <Route path='design-platform-title' element={<PageTitle title="Design Platform" pathname="/design-platform" />} />
            <Route path='design-platform' element={<DesignPlatform />} />
            <Route path='zensupplies-title' element={<PageTitle title="Zensupplies" pathname="/zensupplies" />} />
            <Route path='zensupplies' element={<ZenSupplies />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
