import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import texts from '../content/content';
import Nav from '../components/Nav/Nav'
import Intro from '../components/Intro/Intro';
import Team from '../components/About/Team';
import Cooperativism from '../components/Cooperativism/Cooperativism';
import Facttic from '../components/Cooperativism/Facttic';
import Fit from '../components/Cooperativism/Fit';
import CreativeCoding from '../components/Art/CreativeCoding';
import SoftwareIndustry from '../components/SoftwareIndustry/SoftwareIndustry';

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
            <Team />
          </Route>
          <Route path="/cooperativism" exact>
            <Cooperativism />
            <Facttic />
            <Fit />
          </Route>
          <Route path="/art">
            <CreativeCoding />
          </Route>
          <Route path="/industry">
            <SoftwareIndustry />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
