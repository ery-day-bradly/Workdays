// import day from '../../../thursday/day';

// // Yesterday they let me...


// global(day);

import React from 'react';
import { Link } from 'react-router-dom';

function Thurs() {
  return (
    <div>
    <div>Thursday Component</div>
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/fri">Tomorrow</Link>
    </button>
    <button>
      <Link to="/wed">Yesterday</Link>
    </button>
  </div>
  )
}

export default Thurs