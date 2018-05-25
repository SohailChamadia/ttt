import React from 'react';
import './App.css';
import Frequent from './frequent.jsx'
import logo from './logo.jpg'
class App extends React.Component {
  
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
        <Frequent />
      </div>
    )
  }
}

export default App;
