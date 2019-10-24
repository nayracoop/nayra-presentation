import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'

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
    navigation: texts.navigation,
    currentPage: 0
  }

  keyDown = (e) => {
    if(e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      this.nextScreen();
    } else if(e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.prevScreen();
    }
  }
  
  nextScreen = () => {
    if(this.state.currentPage < this.state.navigation.length-1) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage: currentPage });
      this.props.history.push(this.state.navigation[this.state.currentPage].url);
    }
  }

  prevScreen = () => {
    if(this.state.currentPage > 0) {
      const currentPage = this.state.currentPage - 1;
      this.setState({ currentPage: currentPage });
      this.props.history.push(this.state.navigation[this.state.currentPage].url);
    }
  }
  
  render() {
    return (
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
    );
  }
}

export default withRouter(App);
