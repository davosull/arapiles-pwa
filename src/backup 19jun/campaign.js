import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Campaign extends Component {
  render() {
    return (

  <tbody>
  <tr>
      <td>{this.props.routeData.number}</td>
      <td>{this.props.routeData.Name}</td>
      <td>{this.props.routeData.tags}</td>
      <td>{this.props.routeData.length}</td>
      <td>{this.props.routeData.grade}</td>
    </tr>
      <tr>
      <td colSpan="5" className="desc">{this.props.routeData.description}</td>
    </tr>
    </tbody>
    );
  }
}

export default Campaign;