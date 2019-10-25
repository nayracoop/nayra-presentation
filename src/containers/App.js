import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'

import './App.scss';
import texts from '../content/content';
import Nav from '../components/Nav/Nav'
import Intro from '../components/Intro/Intro';
import Team from '../components/About/Team';
import Cover from '../components/Cover/Cover'
import Cooperativism from '../components/Cooperativism/Cooperativism';
import Facttic from '../components/Cooperativism/Facttic';
import Fit from '../components/Cooperativism/Fit';
import CreativeCoding from '../components/Art/CreativeCoding';
import SoftwareIndustry from '../components/SoftwareIndustry/SoftwareIndustry';

class App extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  state = {
    navigation: texts.navigation,
    currentPage: 0
  }

  keyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      this.nextScreen();
    } else if (e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.prevScreen();
    }
  }

  nextScreen = () => {
    if (this.state.currentPage < this.state.navigation.length - 1) {
      const currentPage = this.state.currentPage + 1;
      this.setState({ currentPage: currentPage });
      this.props.history.push(this.state.navigation[this.state.currentPage].url);
    }
  }

  prevScreen = () => {
    if (this.state.currentPage > 0) {
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
          <Team />
        </Route>
        <Route path="/cooperativism" exact>
          <Cover pageNumber="02" title="Cooperativas" />
        </Route>
        <Route path="/cooperativism/how" exact>
          <Cooperativism title={texts.cooperativism.title} text={texts.cooperativism.text} img="" />
        </Route>
        <Route path="/cooperativism/facttic" exact>
          <Facttic title={texts.facttic.title} text={texts.facttic.text} img="" />
        </Route>
        <Route path="/cooperativism/fit" exact>
          <Fit title={texts.fit.title} text={texts.fit.text} img="" />
        </Route>
        <Route path="/art" exact>
          <Cover pageNumber="03" title="Artes Electrónicas" />
        </Route>
        <Route path="/art/creativeCoding" exact>
          <CreativeCoding />
        </Route>
        <Route path="/industry" exact>
          <Cover pageNumber="04" title="Software" />
          <SoftwareIndustry />
        </Route>
        <Route path="/thanks" exact>
          <Intro title={texts.end.title} description={texts.end.description} />
        </Route>
      </div>
    );
  }
}

export default withRouter(App);
