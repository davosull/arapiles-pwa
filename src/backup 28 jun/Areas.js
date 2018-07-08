import React, { Component } from 'react';
import Wall from './Wall.js';

class Areas extends Component {
  render() {
const areaData = Array.from(this.props.jsonData).filter(item => item.links === this.props.areaName);
let cragsList = [...new Set(areaData.map(item => item.links2))];
cragsList.sort();
    return (
      <div  className="boxOuter">

<div className="boxInner">
          <h2>{this.props.areaName}</h2>
          { 
            cragsList.map( x => <Wall crags={x} key={x+"areasKey"} areaName={this.props.areaName} jsonData={this.props.jsonData} /> )
          }
        </div>
        </div>
    );
  }
}

export default Areas;