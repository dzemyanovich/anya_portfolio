import React from 'react';
import ReactDOM from 'react-dom/client';
// import EventOptimizerTitle from './eventOptimizerTitle';
import EventOptimizer from './eventOptimizer';

import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <EventOptimizerTitle /> */}
    <EventOptimizer />
  </React.StrictMode>
);
