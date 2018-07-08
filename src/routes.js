import React, { Component } from 'react';


class Routes extends Component {
  render() {

let imgsrc = "../../" + this.props.routeData.tags + ".png";

    return (
<tbody className={(this.props.routeData.selected ? 'show' : 'hidden')}>
  <tr>
      <td className="title"><span className="text">{this.props.routeData.number} {this.props.routeData.Name}</span></td>
      <td className="meta"><img alt={this.props.routeData.tags} src={imgsrc} /></td>
      <td className="meta">{this.props.routeData.length}m</td>
      <td className="meta">{this.props.routeData.grade}Au</td>
    </tr>
      <tr>
      <td colSpan="4" className="desc">{this.props.routeData.description}</td>

    </tr>

    </tbody>

     
    );
  }
}

export default Routes;