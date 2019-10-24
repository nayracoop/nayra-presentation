import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Nav from '../components/Nav/Nav'
import Brand from '../components/Brand/Brand';
import Cover from '../components/Cover/Cover';
import Team from '../components/About/Team';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact>
            <Brand/>
          </Route>
          <Route path="/about" exact>
            <Team pageNumber="01" title="¿Quienes Somos?" />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
