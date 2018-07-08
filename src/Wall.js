import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Wall extends Component {
  render() {

let total = this.props.jsonData.filter(item => item.links2 === this.props.crags);
let selected = total.filter(item => item.selected);
let showItem = false;
if (selected.length >  0) {
	showItem = true;
}


    return (

<Link  to={`/crag/${this.props.crags}`}> 
<div  className={(showItem ? 'showWall' : 'hiddenWall')}>
<span className="boxText">{this.props.crags}</span>  
<span className="boxText2">{selected.length}/{total.length} {'\u00A0'} <img alt="" src="../../next.png" /></span>
</div>
      </Link>   
    );
  }
}

export default Wall;