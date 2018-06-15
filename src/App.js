import React, { Component } from 'react';
import AppBar from './components/AppBar';
import ProjectCard from './components/Card';
import List from './components/List';
import Chips from './components/Chips';
import Github from './components/github';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AppBar />
        <ProjectCard />
        <List />
        <Chips />
        */}
        <Github />
      </div>
    );
  }
}

export default App;
