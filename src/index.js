import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './home';
import NoPage from './noPage';
import EventOptimizerTitle from './eventOptimizerTitle';
import EventOptimizer from './eventOptimizer';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='event-optimizer-title' element={<EventOptimizerTitle />} />
            <Route path='event-optimizer' element={<EventOptimizer />} />
            <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
