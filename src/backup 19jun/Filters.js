import React, { Component } from 'react';
import Areas from './Areas.js';

class Filters extends Component {
  render() {

// clean up length
Array.from(this.props.jsonData).forEach(function(element) {
  let y = element.length + '';
  element.length = parseInt(y.split("m")[0]);
});

const areaURL = decodeURIComponent(this.props.match.params.area);
const cragURL = decodeURIComponent(this.props.match.params.crag);

// filter values
let routeArea = [areaURL]; // array of names
let routeCrag = [cragURL]; // array of names

let routeType = []; // array of tags
if (this.props.filterData.trad){routeType.push('Trad');};
if (this.props.filterData.sport){routeType.push('Sport');};
if (this.props.filterData.boulder){routeType.push('Boulder');};
if (this.props.filterData.mixed){routeType.push('Mixed');};

let routeLength = [this.props.filterData.lengthMin, this.props.filterData.lengthMax]; // [low, high]
let routeGrade = [this.props.filterData.gradeMin, this.props.filterData.gradeMax]; // [low, high]
let filtered = this.props.jsonData;
let working = [];

console.log(this.props.level)
// top level
if (this.props.level == "top"){
filtered = this.props.jsonData;
  }

// Area level

if (this.props.level == "area"){
  if (routeArea.length !== 0){
working = [];
routeArea.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.links == element);
working.push(...x)
});
filtered = working;
};
};
// Crag level

if (this.props.level == "crag"){
if (routeCrag.length !== 0){
working = [];
routeCrag.forEach(function(element) {
  let x =Array.from(filtered).filter(item => item.links2 == element);
working.push(...x)
});
filtered = working;
};
};


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
working = Array.from(filtered).filter(item => item.length > routeLength[0] && item.length < routeLength[1]);
filtered = working;

// filter by grade
working = Array.from(filtered).filter(item => item.grade > routeGrade[0] && item.grade < routeGrade[1]);
filtered = working;




// find all areas
let areas = [...new Set(filtered.map(item => item.links))];
areas.sort();


var total = 0;
var subset = 0;
var jsonData2 = this.props.jsonData;
areas.forEach(function(element) {

for(var i = 0; i < jsonData2.length; ++i){
    if(jsonData2[i].links == element)
        total++;
};

for(var i = 0; i < filtered.length; ++i){
    if(filtered[i].links == element)
        subset++;
};

console.log ("result:", element , subset ,total);
});




    return (
<div className="routes">

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
          { 
            areas.map( message => <Areas crags={message}  level={this.props.level} jsonData={filtered} /> )
          }
        </div>

    );
  }
}

export default Filters;