import logo from './logo.svg';
import './App.css';


// what shall we do with these offDays and done... ?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Would you like to see what is done? <code>src/App.js</code> and save to reload.
        </p>
        <div className="rootContainer">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Daily
          </a>
        </div>

      </header>


      <body>
        <div className="button">

          <main>
            <h1>Vista View</h1>
            <p>Take a day off...</p>
            <button>Click</button>
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
