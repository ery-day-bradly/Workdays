// Do global issues abound?
// Strategies continue.
// import day from '../../../monday/day';

// /**
//  *
//  * Help list: apps, users, pears,
//  * Mondays' list: TODO's
//  */

// global(day);

import React from "react";
import { Link } from "react-router-dom";

function Mon() {
  return (
    <div>
      <div>Monday Component</div>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/tues">Tomorrow</Link>
      </button>
    </div>
  );
}

export default Mon;
