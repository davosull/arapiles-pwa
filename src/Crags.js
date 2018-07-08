import React, { Component } from 'react';
import Routes from './routes.js';
import { Link } from 'react-router-dom'

class Crags extends Component {

  render() {
const cragURL = decodeURIComponent(this.props.match.params.crag);
//find all area data
let areaData = Array.from(this.props.jsonData).filter(item => item.links2 === cragURL);

let imageList = ["Colosseum-Wall1.jpg",
"Lizard-Procrastination-Pinnacle1.jpg",
"Shiralee-Wall1.jpg",
"Rabbit-Boulder1.jpg",
"Comic-Strip-Wall1.jpg",
"Hum-Terrace1.jpg",
"Shiralee-Wall2.jpg",
"Voodoo-Buttress1.jpg",
"Comic-Strip-Wall2.jpg",
"Kryptonite-Krack-Area1.jpg",
"Colosseum-Wall2.jpg",
"Declaration-Crag1.jpg",
"Muldoon-Area1.jpg",
"Vandal-Area1.jpg",
"Nameless-Gully1.jpg",
"Muldoon-Area2.jpg",
"Central-Gully-Left1.jpg",
"Hum-Terrace2.jpg",
"House-of-Atreus-Atridae-Main-Wall1.jpg",
"Muldoon-Area3.jpg",
"Brain-Death-Boulder1.jpg",
"White-Mice-Walls1.jpg",
"Kachoong-Area1.jpg",
"Declaration-Crag2.jpg",
"Cassandra-Area1.jpg",
"Lizard-Procrastination-Pinnacle2.jpg",
"Colosseum-Wall3.jpg",
"Werewolf-Area1.jpg",
"Bum-Rocks1.jpg",
"Evelyn-and-Lou-Area1.jpg",
"Declaration-Crag3.jpg",
"North-Mitre1.jpg",
"Flinders-Lane-Area1.jpg",
"Comic-Strip-Wall3.jpg",
"Muldoon-Area4.jpg",
"Mysteries-Wall1.jpg",
"Lizard-Procrastination-Pinnacle3.jpg",
"Plaque1.jpg",
"Cassandra-Area2.jpg",
"Pilot-Error-Area1.jpg",
"Henry-Bolte-Wall1.jpg",
"Lois-Lane-Wall1.jpg",
"Amok-Wall1.jpg",
"House-of-Atreus-Atridae-Main-Wall2.jpg",
"Muldoon-Area5.jpg",
"The-Flight-Deck1.jpg",
"Campbell-s-Kingdom1.jpg",
"Lizard-Procrastination-Pinnacle4.jpg",
"Evelyn-and-Lou-Area2.jpg",
"John-s-Pinnacle1.jpg",
"Agamemnon-Area1.jpg",
"Kachoong-Area2.jpg",
"Main-Wall1.jpg",
"White-Mice-Walls2.jpg",
"Declaration-Crag4.jpg",
"Colosseum-Wall4.jpg",
"White-Mice-Walls3.jpg",
"North-Mitre2.jpg",
"King-Rat-Gully1.jpg",
"Light-Fingered-Gully-Hunger-Gully1.jpg",
"House-of-Atreus-Atridae-Main-Wall3.jpg",
"Comic-Strip-Wall4.jpg",
"Cassandra-Area3.jpg",
"Comic-Strip-Wall5.jpg",
"Light-Fingered-Gully-Hunger-Gully2.jpg",
"Colosseum-Wall5.jpg",
"The-Watchtower1.jpg",
"Back-Wall1.jpg",
"Pilot-Error-Area2.jpg",
"Denim-Wall1.jpg",
"Left-Watchtower-Face1.jpg",
"Henry-Bolte-Wall2.jpg",
"South-Mitre1.jpg",
"Bum-Rocks2.jpg",
"Agamemnon-Area2.jpg",
"Campbell-s-Kingdom2.jpg",
"Lower-Curtain-Wall1.jpg",
"Kryptonite-Krack-Area2.jpg",
"Lois-Lane-Wall2.jpg",
"Brain-Death-Boulder2.jpg",
"New-Image-Wall1.jpg",
"Evelyn-and-Lou-Area3.jpg",
"Hum-Terrace3.jpg",
"Heath-Row-Buttress1.jpg",
"Voodoo-Buttress2.jpg",
"Back-Wall2.jpg",
"Colosseum-Wall6.jpg",
"Harlequin-Cracks-Area1.jpg",
"Bum-Rocks3.jpg",
"Agamemnon-Area3.jpg",
"Declaration-Crag5.jpg",
"Lizard-Procrastination-Pinnacle5.jpg",
"Fang-Buttress1.jpg",
"King-Rat-Gully2.jpg",
"Henry-Bolte-Wall3.jpg",
"Declaration-Crag6.jpg",
"Hum-Terrace4.jpg",
"Lois-Lane-Wall3.jpg",
"The-Flight-Deck2.jpg",
"Kachoong-Area3.jpg",
"Comic-Strip-Wall6.jpg",
"Pilot-Error-Area3.jpg",
"Heath-Row-Buttress2.jpg",
"Campbell-s-Kingdom3.jpg",
"High-Dive-Gully1.jpg",
"South-Mitre2.jpg",
"House-of-Atreus-Atridae-Main-Wall4.jpg",
"Comic-Strip-Wall7.jpg",
"Agamemnon-Area4.jpg",
"Campbell-s-Kingdom4.jpg",
"Main-Wall2.jpg",
"Denim-Wall2.jpg",
"Evelyn-and-Lou-Area4.jpg",
"Henry-Bolte-Wall4.jpg",
"Evelyn-and-Lou-Area5.jpg",
"Kryptonite-Krack-Area3.jpg",
"Right-Watchtower-Face1.jpg",
"Agamemnon-Area5.jpg",
"Declaration-Crag7.jpg",
"Lizard-Procrastination-Pinnacle6.jpg",
"Campbell-s-Kingdom5.jpg",
"Upper-Curtain-Wall1.jpg",
"Looking-Glass-Wall1.jpg",
"Agamemnon-Area6.jpg",
"Lizard-Procrastination-Pinnacle7.jpg",
"Cassandra-Area4.jpg",
"Cobwebs-Gully1.jpg",
"The-Flight-Deck3.jpg",
"Declaration-Crag8.jpg",
"Mermaid-Avenue1.jpg",
"New-Image-Wall2.jpg",
"Agamemnon-Area7.jpg",
"Shiralee-Wall3.jpg",
"Baby-Buttress1.jpg",
"Agamemnon-Area8.jpg",
"Comic-Strip-Wall8.jpg",
"Declaration-Crag9.jpg",
"Cassandra-Area5.jpg",
"Pilot-Error-Area4.jpg",
"Kachoong-Area4.jpg",
"Nameless-Gully2.jpg",
"Werewolf-Area2.jpg",
"North-Mitre3.jpg",
"Bum-Rocks4.jpg",
"Bum-Rocks5.jpg",
"Colosseum-Wall7.jpg",
"White-Mice-Walls4.jpg",
"Evelyn-and-Lou-Area6.jpg",
"Lower-Curtain-Wall2.jpg",
"White-Mice-Walls5.jpg",
"Back-Wall3.jpg",
"Rabbit-Boulder2.jpg",
"Pilot-Error-Area5.jpg",
"High-Dive-Gully2.jpg",
"Plaque2.jpg",
"The-Flight-Deck4.jpg",
"Cobwebs-Gully2.jpg",
"Echo-Crag1.jpg"];

const filename1 = cragURL.replace(/[^A-Z0-9]+/ig, "-")
let images = imageList.filter(word => word.includes(filename1));


  	function compare(a,b) {
  if (a.number < b.number)
    return -1;
  if (a.number > b.number)
    return 1;
  return 0;
}


const routeData = Array.from(areaData).filter(item => item.links2 === cragURL);
routeData.sort(compare);



    return (
          <div>
          <div className="areaTitle">
          <Link to="../browse"><img alt="back" className="backButton" src="../../back.png" /></Link>
          <h2>{cragURL}</h2>
<img alt="filter" className="filterButton" src="../../filter.png" onClick={this.props.toggleFilters} />
</div>

<div className="routesBg">
          { 
            images.map( url => <img alt={url} className="photoTopo" src={"../../topos/" + url} key={url+"imgKey"}/> )
          }


<table>
          { 
            routeData.map( x => <Routes routeData={x} key={x.Name+"routeKey"}/> )
          }
</table>
          </div>
          </div>
    );
  }
}

export default Crags;