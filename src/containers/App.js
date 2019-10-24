import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import texts from '../content/content';

import Nav from '../components/Nav/Nav'
import Intro from '../components/Intro/Intro';
import Cover from '../components/Cover/Cover';
import Team from '../components/About/Team';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path="/" exact>
            <Intro title={texts.intro.title} description={texts.intro.description} date={texts.intro.date} />
          </Route>
          <Route path="/about" exact>
            <Cover pageNumber="01" title="¿Quienes Somos?" />
          </Route>
          <Route path="/about/team" exact>
            <Team pageNumber="01" title="¿Quienes Somos?" />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
