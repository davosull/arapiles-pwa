import React, { Component } from 'react';
import Browse from './browse.js';
import Crags from './Crags.js';
import Intro from './intro.js';
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Filters extends Component {
  render() {

let jsonData = this.props.jsonData;

// clean up length
Array.from(jsonData).forEach(function(element) {
  let y = element.length + '';
  element.length = parseInt(y.split("m")[0]);
});


let routeType = []; // array of tags
if (this.props.filterData.trad){routeType.push('Trad');};
if (this.props.filterData.sport){routeType.push('Sport');};
if (this.props.filterData.boulder){routeType.push('Boulder');};
if (this.props.filterData.mixed){routeType.push('Mixed');};

let routeLength = [this.props.filterData.lengthMin, this.props.filterData.lengthMax]; // [low, high]
let routeGrade = [this.props.filterData.gradeMin, this.props.filterData.gradeMax]; // [low, high]
let filtered = jsonData;
let working = [];

// filter by type
if (routeType.length !== 0){
working = [];
routeType.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.tags === element);
working.push(...x)
});
filtered = working;
};

// filter by length
working = Array.from(filtered).filter(item => item.length > routeLength[0] && item.length < routeLength[1]);
filtered = working;

// filter by grade
working = Array.from(filtered).filter(item => item.grade > routeGrade[0] && item.grade < routeGrade[1]);
filtered = working;




//add deselected to everything
jsonData.forEach(function(x) {x.selected = false;});

// find filtered data names and apply 'selected' value true to them
const fData = Array.from(filtered).map(item => item.Name);

fData.forEach(function(element) {
  jsonData.forEach(function(x) {
if (x.Name === element){
  x.selected = true;
}
});
});


    return (
<div className="routes">

{ this.props.showFilters &&

                <form className="filterForm">
<input type="input" name="gradeMin" value={this.props.filterData.gradeMin} onChange={this.props.handle} size="3" />
             -
            <input type="input"  name="gradeMax" value={this.props.filterData.gradeMax} onChange={this.props.handle}   size="3" />
            Grade
            <br />
            <input type="input"  name="lengthMin" value={this.props.filterData.lengthMin} onChange={this.props.handle}   size="3" />
            m - 
            <input type="input"  name="lengthMax" value={this.props.filterData.lengthMax} onChange={this.props.handle}   size="3" />
            m Length
            <br />
      <input type="checkbox" name="trad" checked={this.props.filterData.trad} onChange={this.props.handle}/>
      Trad
      <input type="checkbox" name="sport" checked={this.props.filterData.sport} onChange={this.props.handle}/>
     Sport  
     <input type="checkbox" name="boulder" checked={this.props.filterData.boulder} onChange={this.props.handle}/>
     Boulder
     <input type="checkbox" name="mixed" checked={this.props.filterData.mixed} onChange={this.props.handle}/>
      Mixed

    </form>
}




<Route render={({ location }) => (
 <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
<Route exact={true} path={process.env.PUBLIC_URL + '/'} render={(props) => <Intro filterData={this.props.filterData} handle={this.props.handle} {...props}/>} />
<Route path={process.env.PUBLIC_URL + '/crag/:crag'} render={(props) => <Crags jsonData={jsonData} toggleFilters={this.props.toggleFilters} {...props}/>} />
<Route path={process.env.PUBLIC_URL + '/browse/'} render={(props) => <Browse jsonData={jsonData} toggleFilters={this.props.toggleFilters} {...props}/>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>


)}/>
        </div>

    );
  }
}

export default Filters;