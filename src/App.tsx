import React from 'react';
import logo from './assets/img/logo.svg';

export default class App extends React.Component {
  return() {
    <div className="App">
      <header className="App-header">
        <img src={'./assets/logo.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>;
  }
}
