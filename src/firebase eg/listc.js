import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Campaign from './campaign.js';

class ListC extends Component {
  render() {
    return (
      <div class="container">
<div class="routes">
      <table class="table">
          { /* Render the list of campaign */
            this.props.message.map( message => <Campaign key={message.id}  id={message.id} firebase={message.text} /> )
          }

        </table>

        </div>
        </div>
    );
  }
}

export default ListC;