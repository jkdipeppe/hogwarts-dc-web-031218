import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import TilesContainer from './TilesContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filter: {
        type:'all',
        greased: 'all'
      }
    }
  }

  handleTypeFilter = (e) => {
    this.setState(
      {filter: {...this.state.filter, type: e.target.value}}
    )
  }

  handleGreasedFilter = (e) => {
    this.setState(
      {filter: {...this.state.filter, greased: e.target.value}}
    )
  }

  render() {
    return (
      <div className="App">
        < Nav
          handleTypeFilter={this.handleTypeFilter} handleGreasedFilter={this.handleGreasedFilter}
        />
      < TilesContainer type={this.state.filter.type} greased={this.state.filter.greased} hogList={this.state.hogs}  />

      </div>
    )
  }
}

export default App;
