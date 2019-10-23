import React, { Component } from 'react';
import './App.scss';
import Cover from '../components/Cover/Cover'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Cover pageNumber="01" title="¿Quienes Somos?" />
      </div>
    );
  }
}

export default App;
