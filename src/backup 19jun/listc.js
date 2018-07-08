import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Campaign from './campaign.js';

class ListC extends Component {
  render() {
    return (
      <div className="container">
<div className="routes">
      <table className="table">
          { /* Render the list of campaign */
            this.props.message.map( message => <Campaign key={message.webScraperOrder}  id={message.webScraperOrder} firebase={message} /> )
          }

        </table>

        </div>
        </div>
    );
  }
}

export default ListC;