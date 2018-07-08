import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Campaign extends Component {
  render() {
    return (

  <tbody>
  <tr>
      <td>{this.props.firebase.number}</td>
      <td>{this.props.firebase.Name}</td>
      <td>{this.props.firebase.tags}</td>
      <td>{this.props.firebase.length}</td>
      <td>{this.props.firebase.grade}</td>
    </tr>
      <tr>
      <td colspan="5" class="desc">{this.props.firebase.description}</td>
    </tr>
    </tbody>
    );
  }
}

export default Campaign;