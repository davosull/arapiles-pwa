import React, { Component } from 'react';
import Wall from './Wall.js';

class Areas extends Component {
  render() {


const areaDesc = [
["Atridae", "The big, prominent block up and left behind the camp ground."],
["Bluffs", "Bluff Major and Bluff Minor are the two huge blocks perched above Tiger Wall."],
["Bushranger Bluff", "The outcrop at Arapiles' far south-eastern end. A popular area for beginners. "],
["Colosseum Wall Area", "Colosseum Wall is the last significant outcrop as you head South (L along the cliff line)."],
["Declaration Crag Area", "The prominent outcrop by the side of the road about 600m south of the camping ground. A good area for beginners."],
["Fang Buttress and Surrounds", " " ],
["Far North", " " ],
["Grotto Wall", "The buttress directly behind Castle Crag."],
["King Rat Area", "A bit of a labyrinth, but worth exploring. Good on a hot day."],
["Mitre Rock", " "],
["Northern Group", " " ],
["Organ Pipes Area", "Probably the most popular multi-pitch area at Arapiles and, more importantly, close to camp."],
["Pilot Error Cliffs", "The gullies and walls in between the Atridae and King Rat Gully."],
["Voodoo Area", " "],
["Watchtower Area", "One of the most impressive sheer walls at the mountain. Contains many three star multi-pitch classics - some of the best routes Arapiles has to offer."],
["Western Side", " " ]
];

const result = areaDesc.find( x => x[0] === this.props.areaName );
const description = result[1];


    const filterData = this.props.jsonData.filter(item => item.selected)
const areaData = Array.from(filterData).filter(item => item.links === this.props.areaName);
let cragsList = [...new Set(areaData.map(item => item.links2))];
cragsList.sort();
    return (
      <div  className="boxOuter">

<div className="boxInner">
          <h2>{this.props.areaName}</h2>
          <p>{description}</p>
          <hr />
          { 
            cragsList.map( x => <Wall crags={x} key={x+"areasKey"} areaName={this.props.areaName} jsonData={this.props.jsonData} /> )
          }
        </div>
        </div>
    );
  }
}

export default Areas;