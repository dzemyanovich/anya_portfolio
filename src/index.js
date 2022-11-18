import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/home/home';
import NoPage from './pages/noPage';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import EventOptimizerTitle from './pages/event-optimizer-title/eventOptimizerTitle';
import EventOptimizer from './pages/event-optimizer/eventOptimizer';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='event-optimizer-title' element={<EventOptimizerTitle />} />
            <Route path='projects' element={<Projects />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='event-optimizer' element={<EventOptimizer />} />
            <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
