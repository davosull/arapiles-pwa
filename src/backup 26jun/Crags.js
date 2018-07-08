import React, { Component } from 'react';
import Routes from './routes.js';
import { Link } from 'react-router-dom'

class Crags extends Component {

  render() {
const cragURL = decodeURIComponent(this.props.match.params.crag);
//find all area data
let areaData = Array.from(this.props.jsonData).filter(item => item.links2 == cragURL);

let imageList = ["Colosseum-Wall1.png",
"Lizard-Procrastination-Pinnacle1.png",
"Shiralee-Wall1.png",
"Rabbit-Boulder1.png",
"Comic-Strip-Wall1.png",
"Hum-Terrace1.png",
"Shiralee-Wall2.png",
"Voodoo-Buttress1.png",
"Comic-Strip-Wall2.png",
"Kryptonite-Krack-Area1.png",
"Colosseum-Wall2.png",
"Declaration-Crag1.png",
"Muldoon-Area1.png",
"Vandal-Area1.png",
"Nameless-Gully1.png",
"Muldoon-Area2.png",
"Central-Gully-Left1.png",
"Hum-Terrace2.png",
"House-of-Atreus-Atridae-Main-Wall1.png",
"Muldoon-Area3.png",
"Brain-Death-Boulder1.png",
"White-Mice-Walls1.png",
"Kachoong-Area1.png",
"Declaration-Crag2.png",
"Cassandra-Area1.png",
"Lizard-Procrastination-Pinnacle2.png",
"Colosseum-Wall3.png",
"Werewolf-Area1.png",
"Bum-Rocks1.png",
"Evelyn-and-Lou-Area1.png",
"Declaration-Crag3.png",
"North-Mitre1.png",
"Flinders-Lane-Area1.png",
"Comic-Strip-Wall3.png",
"Muldoon-Area4.png",
"Mysteries-Wall1.png",
"Lizard-Procrastination-Pinnacle3.png",
"Plaque1.png",
"Cassandra-Area2.png",
"Pilot-Error-Area1.png",
"Henry-Bolte-Wall1.png",
"Lois-Lane-Wall1.png",
"Amok-Wall1.png",
"House-of-Atreus-Atridae-Main-Wall2.png",
"Muldoon-Area5.png",
"The-Flight-Deck1.png",
"Campbell-s-Kingdom1.png",
"Lizard-Procrastination-Pinnacle4.png",
"Evelyn-and-Lou-Area2.png",
"John-s-Pinnacle1.png",
"Agamemnon-Area1.png",
"Kachoong-Area2.png",
"Main-Wall1.png",
"White-Mice-Walls2.png",
"Declaration-Crag4.png",
"Colosseum-Wall4.png",
"White-Mice-Walls3.png",
"North-Mitre2.png",
"King-Rat-Gully1.png",
"Light-Fingered-Gully-Hunger-Gully1.png",
"House-of-Atreus-Atridae-Main-Wall3.png",
"Comic-Strip-Wall4.png",
"Cassandra-Area3.png",
"Comic-Strip-Wall5.png",
"Light-Fingered-Gully-Hunger-Gully2.png",
"Colosseum-Wall5.png",
"The-Watchtower1.png",
"Back-Wall1.png",
"Pilot-Error-Area2.png",
"Denim-Wall1.png",
"Left-Watchtower-Face1.png",
"Henry-Bolte-Wall2.png",
"South-Mitre1.png",
"Bum-Rocks2.png",
"Agamemnon-Area2.png",
"Campbell-s-Kingdom2.png",
"Lower-Curtain-Wall1.png",
"Kryptonite-Krack-Area2.png",
"Lois-Lane-Wall2.png",
"Brain-Death-Boulder2.png",
"New-Image-Wall1.png",
"Evelyn-and-Lou-Area3.png",
"Hum-Terrace3.png",
"Heath-Row-Buttress1.png",
"Voodoo-Buttress2.png",
"Back-Wall2.png",
"Colosseum-Wall6.png",
"Harlequin-Cracks-Area1.png",
"Bum-Rocks3.png",
"Agamemnon-Area3.png",
"Declaration-Crag5.png",
"Lizard-Procrastination-Pinnacle5.png",
"Fang-Buttress1.png",
"King-Rat-Gully2.png",
"Henry-Bolte-Wall3.png",
"Declaration-Crag6.png",
"Hum-Terrace4.png",
"Lois-Lane-Wall3.png",
"The-Flight-Deck2.png",
"Kachoong-Area3.png",
"Comic-Strip-Wall6.png",
"Pilot-Error-Area3.png",
"Heath-Row-Buttress2.png",
"Campbell-s-Kingdom3.png",
"High-Dive-Gully1.png",
"South-Mitre2.png",
"House-of-Atreus-Atridae-Main-Wall4.png",
"Comic-Strip-Wall7.png",
"Agamemnon-Area4.png",
"Campbell-s-Kingdom4.png",
"Main-Wall2.png",
"Denim-Wall2.png",
"Evelyn-and-Lou-Area4.png",
"Henry-Bolte-Wall4.png",
"Evelyn-and-Lou-Area5.png",
"Kryptonite-Krack-Area3.png",
"Right-Watchtower-Face1.png",
"Agamemnon-Area5.png",
"Declaration-Crag7.png",
"Lizard-Procrastination-Pinnacle6.png",
"Campbell-s-Kingdom5.png",
"Upper-Curtain-Wall1.png",
"Looking-Glass-Wall1.png",
"Agamemnon-Area6.png",
"Lizard-Procrastination-Pinnacle7.png",
"Cassandra-Area4.png",
"Cobwebs-Gully1.png",
"The-Flight-Deck3.png",
"Declaration-Crag8.png",
"Mermaid-Avenue1.png",
"New-Image-Wall2.png",
"Agamemnon-Area7.png",
"Shiralee-Wall3.png",
"Baby-Buttress1.png",
"Agamemnon-Area8.png",
"Comic-Strip-Wall8.png",
"Declaration-Crag9.png",
"Cassandra-Area5.png",
"Pilot-Error-Area4.png",
"Kachoong-Area4.png",
"Nameless-Gully2.png",
"Werewolf-Area2.png",
"North-Mitre3.png",
"Bum-Rocks4.png",
"Bum-Rocks5.png",
"Colosseum-Wall7.png",
"White-Mice-Walls4.png",
"Evelyn-and-Lou-Area6.png",
"Lower-Curtain-Wall2.png",
"White-Mice-Walls5.png",
"Back-Wall3.png",
"Rabbit-Boulder2.png",
"Pilot-Error-Area5.png",
"High-Dive-Gully2.png",
"Plaque2.png",
"The-Flight-Deck4.png",
"Cobwebs-Gully2.png",
"Echo-Crag1.png"];

const filename1 = cragURL.replace(/[^A-Z0-9]+/ig, "-")
let images = imageList.filter(word => word.includes(filename1));

console.log(images);



  	function compare(a,b) {
  if (a.number < b.number)
    return -1;
  if (a.number > b.number)
    return 1;
  return 0;
}


const routeData = Array.from(areaData).filter(item => item.links2 == cragURL);
routeData.sort(compare);



    return (
          <div>
          <div className="areaTitle">
          <Link to="../browse"><img className="backButton" src="../../back.png" /></Link>
          <h2>{cragURL}</h2>
<img className="filterButton" src="../../filter.png" onClick={this.props.toggleFilters} />
</div>

<div className="routesBg">
          { 
            images.map( url => <img className="photoTopo" src={"../../topos/" + url} /> )
          }


<table>
          { 
            routeData.map( message => <Routes routeData={message} /> )
          }
</table>
          </div>
          </div>
    );
  }
}

export default Crags;