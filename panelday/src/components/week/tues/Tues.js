// import { FullWindowOverlay } from 'react-native-screens';
// import day from '../../../tuesday/day';
// import { feature, Tuesday } from '../tues';


// Tuesday({
//   render() {
//     return (
//       Tuesday
//     );
//   }
// });

// Tuesday(feature.flow);

// // flow is a future in each feature... feature the flow.
// // how is it flowing?

import React from 'react';
import { Link } from 'react-router-dom';

function Tues() {
  return (
    <div>
    <div>TuesdayComponent</div>
    <button>
      <Link to="/">Home</Link>
    </button>
    <button>
      <Link to="/wed">Tomorrow</Link>
    </button>
    <button>
      <Link to="/mon">Yesterday</Link>
    </button>
  </div>
  )
}

export default Tues