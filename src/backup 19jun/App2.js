import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import ListC from './listc.js';
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
// 
let areas = [...new Set(jsonData.map(item => item.links))];
let crags = [...new Set(jsonData.map(item => item.links2))];


  let children = [];
  let areas1 = [];
areas.forEach(function(areaArray) {
var y = Array.from(jsonData).filter(item => item.links == areaArray)
children[areaArray] = [];

crags.forEach(function(element) {
  var x = Array.from(y).filter(item => item.links2 == element)
  if (x && x.length) { 
    children[areaArray][element] = [];
children[areaArray][element].push(x);
};
  
});

});



console.log(children)

const test1 = [1,2,3];
console.log(test1)
console.log(children)
//const nestedRoutes = children["Atridae"]["Agamemnon Area"][0];



    return (
      <div>
{/* 
<Route path="/ad/:id" render={(props) => <Ad firebase={this.state.campaign} {...props}/>} />
<Route path="/new/" render={(props) => <NewC add={this.addMessage} {...props}/>} />
<Route exact path="/" render={(props) => <ListC message={nestedRoutes} {...props}/>} />
*/}

{ 
            children.map( message => <Areas crags={message} /> )
          }

      </div>
    );
  }
}

export default App;