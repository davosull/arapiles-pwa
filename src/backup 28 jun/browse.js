import React, { Component } from 'react';
import Areas from './Areas.js';
import { Link } from 'react-router-dom';

class Browse extends Component {
  render() {




// tag areas w routes and then loop through all areas by name
let areas = [...new Set(this.props.jsonData.map(item => item.links))];
areas.sort();

    return (
   	<div>
    	          <div className="areaTitle">
          <Link to='/'><img alt="back" className="backButton" src="../../back.png" /></Link>
          <h2>Browse Areas</h2>
<img alt="filter" className="filterButton" src="../../filter.png" onClick={this.props.toggleFilters} />
</div>
<div className="first">
    	{ 
            areas.map( x => <Areas areaName={x} key={x+"browseKey"} jsonData={this.props.jsonData}/> )
          }
          </div>
          </div>
    );
  }
}

export default Browse;