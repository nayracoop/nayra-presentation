import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.scss';
import Cover from '../components/Cover/Cover';
import Nav from '../components/Nav/Nav'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav className="Navbar"/>
          <Route path="/" exact>
            <Cover pageNumber="01" title="¿Quienes Somos?" />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
