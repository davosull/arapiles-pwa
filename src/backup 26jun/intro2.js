import React, { Component } from 'react';
import Wall from './Wall.js';
import { Link } from 'react-router-dom';

class Intro2 extends Component {
  render() {

    return (
      <div>
          <b>What style of climbing are you interested in?</b>

<form>

<input type="input" name="gradeMin" value={this.props.filterData.gradeMin} onChange={this.props.handle} size="3" />
             -
            <input type="input"  name="gradeMax" value={this.props.filterData.gradeMax} onChange={this.props.handle}   size="3" />
            Grade
            <br />
            <input type="input"  name="lengthMin" value={this.props.filterData.lengthMin} onChange={this.props.handle}   size="3" />
            m - 
            <input type="input"  name="lengthMax" value={this.props.filterData.lengthMax} onChange={this.props.handle}   size="3" />
            m Length
            <br />

    </form>
     
     <Link to="/">Back</Link> <Link to="browse">Next</Link>

        </div>
    );
  }
}

export default Intro2;