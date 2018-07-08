import React, { Component } from 'react';
import Crags from './Crags.js';
import { Link } from 'react-router-dom';

class Areas extends Component {
  render() {
const areaData = Array.from(this.props.jsonData).filter(item => item.links == this.props.crags);
let cragsList = [...new Set(areaData.map(item => item.links2))];
cragsList.sort();
    return (
      <div>
          
          { 
            cragsList.map( message => <Crags routes={message} crags={this.props.crags} level={this.props.level} area={this.props.crags} areaData={areaData} /> )
          }
        </div>
    );
  }
}

export default Areas;