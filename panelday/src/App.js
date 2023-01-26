import React from 'react';
import './App.css';



// This feature has the user make three clicks in a row to see welcome. 
export default function App() {
  return (

    <body>
      <button onUploadImage={() => alert('like-button-root')} />
      <main id="like-button-root">  {(<button onClick={alert("Welcome")}>Welcome</button>)}
        <h1>Welcome</h1>
        <img src="./rolling_react_operations.jpg" alt="lets=roll" />




      </main>
      <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin></script>
      <script src="../off/likeBtn.js"></script>
    </body>

  );
}

// const styles = StyleSheet.create({
//   logo: { padding: 1 },
//   box: { padding: 8 },
//   text: { fontWeight: 'noopener noreferrer' }
// });


