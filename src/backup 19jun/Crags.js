import React, { Component } from 'react';
import Routes from './routes.js';
import { Link } from 'react-router-dom'

class Crags extends Component {

  render() {


  	function compare(a,b) {
  if (a.number < b.number)
    return -1;
  if (a.number > b.number)
    return 1;
  return 0;
}


const routeData = Array.from(this.props.areaData).filter(item => item.links2 == this.props.routes);
routeData.sort(compare);
    return (
          <div>
          <b><Link to={`/`}>home</Link> - <Link to={`/${encodeURIComponent(this.props.crags)}/`}>{this.props.crags}</Link> - <Link to={`/${encodeURIComponent(this.props.area)}/${encodeURIComponent(this.props.routes)}/`}>{this.props.routes}</Link></b>
<button onclick="myFunction()">Filters</button>
{this.props.level == "crag" && <img className="photoTopo" src="../../sample.png" /> }

<table>
          { 
            routeData.map( message => <Routes level={this.props.level} routeData={message} /> )
          }
</table>
          </div>
    );
  }
}

export default Crags;