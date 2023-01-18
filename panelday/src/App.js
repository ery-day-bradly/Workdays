import logo from './logo.svg';
import './App.css';


// what shall we do with these offDays and done... ?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="rootContainer">
          <a
            className="App-link"
            href="https://beta.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome
          </a>
        </div>

      </header>
      <body>

        <main id="like-button-root">
          <div className="button">

            <h3>What's the latest?</h3>

            <h4>
              <p>This is the vista of the view.</p>
              <button>Like</button>

            </h4>
          </div>
        </main>
        <script src="https://unpkg.com/react@18/umd/react.development.js" crossOrigin></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossOrigin></script>

        <script src="../off/likeBtn.js"></script>
      </body>
    </div>
  );
}

export default App;
