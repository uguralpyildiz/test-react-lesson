import logo from './logo.svg';
import './App.css';

//import components
import Nav from './components/Nav.js'
import Tweet from './components/Tweet.js'

function App() {

  return (
    <>
      <Nav />
      <div className="App">
        <h1>Test</h1>
      </div>
      <Tweet />
    </>
  );
}

export default App;
