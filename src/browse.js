import React, { Component } from 'react';
import Areas from './Areas.js';
import { Link } from 'react-router-dom';
import detailData from './deets.json';

class Browse extends Component {
  render() {

const filterData = this.props.jsonData.filter(item => item.selected)


// tag areas w routes and then loop through all areas by name
let areas = [...new Set(filterData.map(item => item.links))];
areas.sort();

    return (
   	<div>
    	          <div className="areaTitle">
          <Link to={process.env.PUBLIC_URL + '/'}><img alt="back" className="backButton" src={process.env.PUBLIC_URL + '/back.png'} /></Link>
          <h2>Browse Areas</h2>
<img alt="filter" className="filterButton" src={process.env.PUBLIC_URL + '/filter.png'} onClick={this.props.toggleFilters} />
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