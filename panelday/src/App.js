// import React, { useState } from 'react';
// import './App.css';

// //The following lines do not allow App to be rendered
// // let canvas = document.getElementById("myWelcomeCanvas");
// // let ctx = canvas.getContext("like-button-root");
// // ctx("myWelcome");
// // This feature has the user make three clicks in a row to see welcome. 

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Development View</h2>
//       <div>
//         <button onClick={() => setCount((count) => count + 1)}>Count is {count}</button>
//       </div>
//       <ul>
//         <li>Yesterday</li>
//         <li>Today</li>
//         <li>Tomorrow</li>
//       </ul>
//     </div>

//     // <body className='container'>
//     //   <p>You liked this {count} times</p>
//     //   {/* <button onUploadImage={() => alert('like-button-root')} /> */}
//     //   <>
//     //     <section id="like-button-root">  {(<button onClick={setCount(count + 1 + "myWelcome")}>Welcome</button>)}
         
//     //     </section>
//     //   </>

//     //   {/* <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin></script>
//     //   <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin></script>
//     //   <script src="../off/likeBtn.js"></script> */}
//     // </body>

//   );
// }



// <h2 className="Wednesday-Let-Me">Development View</h2>
//       <div id="root">
//         <div class={laoder} id={loader}>
//           <button onClick={count} id="button">Load It</button>
//           <div id="rootContainer">
//     </section>

//     <canvas id="myCanvas" width="300" height="250">
//       <ul>
//         <li><data value="000">Yesterday</li>
//         <li><data value="111">Today</li>
//         <li><data value="222">Tomorrow</li>
//       </ul>
//     </canvas>


import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from "./components/Home.js";
import Mon from "./components/week/mon/Mon.js";
import Tues from "./components/week/tues/Tues";
import WedsdayLetMe from "./components/week/wed/WedsdayLetMe";
import Thurs from "./components/week/thurs/Thurs";
import Fri from "./components/week/fri/Fri";

export default function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mon" element={<Mon/>} />
        <Route path="/tues" element={<Tues/>} />
        <Route path="/wed" element={<WedsdayLetMe />} />
        <Route path="/thurs" element={<Thurs/>} />
        <Route path="/fri" element={<Fri/>} />
      </Routes>
      </div>
    </Router>

  );
}
