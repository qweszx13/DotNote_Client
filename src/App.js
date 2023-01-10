import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi. We are Dot Note
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1 class="text-2xl font-bold underline">
          Hello world!
        </h1>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
