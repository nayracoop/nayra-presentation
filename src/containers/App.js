import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.scss';
import texts from '../content/content';

import Nav from '../components/Nav/Nav'
import Intro from '../components/Intro/Intro';
import Cover from '../components/Cover/Cover';
import Team from '../components/About/Team';

class App extends Component {

  componentDidMount () {
    window.addEventListener('keydown', this.keyDown);
  }

  state = {
    navigation: texts.navigation
  }

  keyDown = (e) => {
    if(e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') this.nextScreen();
    else if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowUp') this.prevScreen();
  }
  
  nextScreen = () => {
    console.log('next');
  }

  prevScreen = () => {
    console.log('prev');
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav options={this.state.navigation} />
          <Route path="/" exact>
            <Intro title={texts.intro.title} description={texts.intro.description} date={texts.intro.date} />
          </Route>
          <Route path="/about" exact>
            <Cover pageNumber="01" title="¿Quienes Somos?" />
          </Route>
          <Route path="/about/team" exact>
            <Team pageNumber="01" title="¿Quienes Somos?" />
          </Route>
          <Route path="/thanks" exact>
            <Intro title={texts.end.title} description={texts.end.description} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
