import React, { Component } from 'react';
import './App.css';

import { SearchForm } from "./components/searchform";

class App extends Component {
  render() {
    return (
      <div>
        React
        <SearchForm></SearchForm>
      </div> // everything must be inside a root element cant add two dom elements
    );
  }
}

export default App;
