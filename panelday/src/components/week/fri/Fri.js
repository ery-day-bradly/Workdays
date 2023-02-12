// import day from '../../../friday/day';


// global(day);

import React from 'react';
import { Link } from 'react-router-dom';

function Fri() {
  return (
    <div>
    <div>Friday Component</div>
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/thurs">Yesterday</Link>
    </button>
  </div>
  )
}

export default Fri