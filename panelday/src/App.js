import React, { useState } from 'react';
import './App.css';

let canvas = document.getElementById("myWelcomeCanvas");
let ctx = canvas.getContext("like-button-root");
ctx("myWelcome");
// This feature has the user make three clicks in a row to see welcome. 
export default function App() {
  const [count, setCount] = useState(0);

  return (

    <body className='container'>
      <p>You liked this {count} times</p>
      <button onUploadImage={() => alert('like-button-root')} />
      <>
        <section id="like-button-root">  {(<button onClick={setCount(count + 1 + "myWelcome")}>Welcome</button>)}
         
        </section>
      </>

      <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin></script>
      <script src="../off/likeBtn.js"></script>
    </body>

  );
}

