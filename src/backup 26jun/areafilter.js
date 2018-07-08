


// area filtering cut out

const areaURL = decodeURIComponent(this.props.match.params.area);
const cragURL = decodeURIComponent(this.props.match.params.crag);

// filter values
let routeArea = [areaURL]; // array of names
let routeCrag = [cragURL]; // array of names

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




// find all areas
let areas = [...new Set(filtered.map(item => item.links))];
areas.sort();


// find how many routes are good
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