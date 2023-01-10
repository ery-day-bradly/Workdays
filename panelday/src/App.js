import logo from './logo.svg';
import './App.css';



// what shall we do with these offDays and done... ?
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          We need a search field and form <code>src/App.js</code> so we can help
        </p>
        <div className="rootContainer">
          <a
            className="App-link"
            href="https://dev.wavebites.io/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Welcome to Wavebites
          </a>
        </div>

      </header>
      <body>
        <main>
          <div className="button">

            <h3>What's the latest?</h3>

            <h4>
              <p>This is the vista of the view.</p>
              <button>React Daily</button>

            </h4>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
