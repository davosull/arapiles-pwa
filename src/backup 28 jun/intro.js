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
<form>

      <input type="checkbox" name="trad" checked={this.props.filterData.trad} onChange={this.props.handle}/>
      Trad <br />
      <input type="checkbox" name="sport" checked={this.props.filterData.sport} onChange={this.props.handle}/>
     Sport  <br />
     <input type="checkbox" name="boulder" checked={this.props.filterData.boulder} onChange={this.props.handle}/>
     Boulder <br />
     <input type="checkbox" name="mixed" checked={this.props.filterData.mixed} onChange={this.props.handle}/>
      Mixed <br />


    </form>
    </div>
</div>
<div className="boxOuter">
<div className="boxInner">
<h2>Grade</h2>
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
</div>
</div>
    <Link to={{ pathname: 'browse', state: { foo: 'not'} }}>Next</Link>
        </div>
        </div>
    );
  }
}

export default Intro;