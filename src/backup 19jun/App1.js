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
      campaign: jsonData
}; // <- set up react state

  }

  render() {
 

// clean up length
Array.from(jsonData).forEach(function(element) {
  let y = element.length + '';
  element.length = y.split("m")[0];
  console.log(element.length)
});



// filter values
let routeArea = []; // array of names
let routeCrag = []; // array of names
let routeType = []; // array of tags
let routeLength = []; // [low, high]
let routeGrade = []; // [low, high]
let filtered = jsonData;
let working = [];

// filter by type
if (routeType.length !== 0){
working = [];
routeType.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.tags == element);
working.push(...x)
});
filtered = working;
};

// filter by length
if (routeType.length !== 0){
working = Array.from(filtered).filter(item => item.length > routeLength[0] && item.length < routeLength[1]);
filtered = working;
};
// filter by grade
if (routeGrade.length !== 0){
working = Array.from(filtered).filter(item => item.grade > routeGrade[0] && item.grade < routeGrade[1]);
filtered = working;
};

// filter by Area
if (routeArea.length !== 0){
working = [];
routeArea.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.links == element);
working.push(...x)
});
filtered = working;
};

// filter by Crag
if (routeCrag.length !== 0){
working = [];
routeCrag.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.links2 == element);
working.push(...x)
});
filtered = working;
};




// find all areas
let areas = [...new Set(filtered.map(item => item.links))];
areas.sort();

    return (
      <div>

{/* 
<Route path="/ad/:id" render={(props) => <Ad firebase={this.state.campaign} {...props}/>} />
<Route path="/new/" render={(props) => <NewC add={this.addMessage} {...props}/>} />
<Route exact path="/" render={(props) => <ListC message={nestedRoutes} {...props}/>} />
*/}
{ 
            areas.map( message => <Areas crags={message} jsonData={filtered} /> )
          }

      </div>
    );
  }
}

export default App;