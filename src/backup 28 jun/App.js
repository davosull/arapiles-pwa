import React, { Component } from 'react';
import Filters from './Filters.js';
import './styles.css';
import jsonData from './crag.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      showFilters: false,
      filterData: {
trad : true,
boulder : true,
sport : true,
mixed : true,
gradeMin : 0,
gradeMax : 100,
lengthMin : 0,
lengthMax : 100
      }
}; // <- set up react state

 this.handleInputChange = this.handleInputChange.bind(this);
 this.toggleFilters = this.toggleFilters.bind(this);

  }


 handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

var filterData1 = {...this.state.filterData}
filterData1[name] = value;
    this.setState({
      filterData: filterData1
    });

  }

   toggleFilters() {
    this.setState({
      showFilters: !this.state.showFilters
    });

  }


  render() {

    return (
<Filters jsonData={jsonData} filterData={this.state.filterData} showFilters={this.state.showFilters} toggleFilters={this.toggleFilters} handle={this.handleInputChange}/>

    );
  }
}

export default App;