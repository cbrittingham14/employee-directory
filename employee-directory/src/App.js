import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Container';
import Container from './components/Container';
import employees from './employees.json';

function App() {
  console.log('employees: ', employees);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
