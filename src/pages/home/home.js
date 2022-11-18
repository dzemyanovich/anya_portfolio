import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return <nav>
    <ul>
      <li>
        <Link to='/event-optimizer-title'>Event Optimizer title</Link>
      </li>
      <li>
        <Link to='/event-optimizer'>Event Optimizer</Link>
      </li>
    </ul>
  </nav>;
};

export default Home;
