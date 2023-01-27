import React from 'react';
import './App.css';

let canvas = document.getElementById("myWelcomeCanvas");
let ctx = canvas.getContext("like-button-root");

ctx("myWelcomeCanvas");

// This feature has the user make three clicks in a row to see welcome. 
export default function App() {
  return (

    <body>
      <button onUploadImage={() => alert('like-button-root')} />
      <>
        <main id="like-button-root">  {(<button onClick={alert("myWelcomeCanvas")}>Welcome</button>)}
          <form>
            <label for="submit-button">Submit Button:</label>
            <button id="submit-button" type="submit">Submit</button>

            <label for="reset-button">Reset Button:</label>
            <button id="reset-button" type="reset">Reset</button>

            <label for="custom-button">Custom Button:</label>
            <button id="custom-button" type="button">Click me!</button>
          </form>
        </main>
      </>

      <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin></script>
      <script src="../off/likeBtn.js"></script>
    </body>

  );
}

