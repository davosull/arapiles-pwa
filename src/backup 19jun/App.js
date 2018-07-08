import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import Filters from './Filters.js';
import Areas from './Areas.js';
import './styles.css';
import jsonData from './crag.json';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
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



  render() {

    return (
      <div>

{/* 
<Route path="/ad/:id" render={(props) => <Ad firebase={this.state.campaign} {...props}/>} />
<Route path="/new/" render={(props) => <NewC add={this.addMessage} {...props}/>} />
*/}
<Route exact path="/" render={(props) => <Filters jsonData={jsonData} level="top" filterData={this.state.filterData} handle={this.handleInputChange} {...props}/>} />
<Route path="/:area/:crag" render={(props) => <Filters jsonData={jsonData} filterData={this.state.filterData} handle={this.handleInputChange} level="crag" {...props}/>} />
<Route exact path="/:area/" render={(props) => <Filters jsonData={jsonData} filterData={this.state.filterData} handle={this.handleInputChange} level="area" {...props}/>} />       

      </div>
    );
  }
}

export default App;