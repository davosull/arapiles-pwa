import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {


    return (
      <div>
          <div className="areaTitle">
          <h2>Preferences</h2>
</div>
<div className="first">
<div className="boxOuter">
<div className="boxInner">
<h2>Climbing Style</h2>
<p>Select the styles of climbing you're interested in</p>
<hr />
<form className="leftPadding">

<label className="checkContainer">Trad
  <input type="checkbox" name="trad" checked={this.props.filterData.trad} onChange={this.props.handle} />
  <span className="checkmark"></span>
</label>

<label className="checkContainer">Sport
  <input type="checkbox" name="sport" checked={this.props.filterData.sport} onChange={this.props.handle} />
  <span className="checkmark"></span>
</label>

<label className="checkContainer">Boulder
  <input type="checkbox" name="boulder" checked={this.props.filterData.boulder} onChange={this.props.handle} />
  <span className="checkmark"></span>
</label>

<label className="checkContainer">Mixed
  <input type="checkbox" name="mixed" checked={this.props.filterData.mixed} onChange={this.props.handle} />
  <span className="checkmark"></span>
</label>

    </form>
    </div>
</div>
<div className="boxOuter">
<div className="boxInner">
<h2>Grade</h2>
<p>Enter the range of grades you're looking for</p>
<hr />
    <form  className="leftPadding">

From <input type="input" name="gradeMin" value={this.props.filterData.gradeMin} onChange={this.props.handle} size="3" /> to <input type="input"  name="gradeMax" value={this.props.filterData.gradeMax} onChange={this.props.handle}   size="3" />
            
            <br />
            

    </form>
</div>
</div>


    <Link to={{ pathname: 'browse', state: { foo: 'not'} }}>
    <button className="mainButton">Next</button></Link>
        </div>
        </div>
    );
  }
}

export default Intro;