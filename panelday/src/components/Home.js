import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Home</div>
      <div>
        <h2>Development View</h2>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>
        <ul>
          <li>Yesterday</li>
          <li>Today</li>
          <li>Tomorrow</li>
        </ul>
      </div>

      <button>
        <Link to='/mon'>Monday</Link>
      </button>
      <button>
        <Link to='/tues'>Tuesday</Link>
      </button>
      <button>
        <Link to='/wed'>Wednesday</Link>
      </button>
      <button>
        <Link to='/thurs'>Thursday</Link>
      </button>
      <button>
        <Link to='/fri'>Friday</Link>
      </button>
    </div>
  );
}

export default Home;
