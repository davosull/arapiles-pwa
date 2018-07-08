import React, { Component } from 'react';
import fire from './fire';
import { Link, Route, Switch } from 'react-router-dom'
import ListC from './listc.js';
import NewC from './newc.js';
import './styles.css';
import Ad from './ad.js';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      campaign: [],
}; // <- set up react state

  }

  componentWillMount(){
    /* Create reference to campaign in Firebase Database */
    let campaignRef = fire.database().ref().orderByKey().limitToLast(100);
    campaignRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ campaign: [message].concat(this.state.campaign) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    var CamObject = {headline:this.inputHead.value, image:this.state.avatarURL, copy:this.inputCopy.value, color:this.inputColor.value};
    fire.database().ref('campaign').push( CamObject );
    this.inputHead.value = ''; // <- clear the input
  }


  render() {

          
    return (
      <div>

{/* 
<Route path="/ad/:id" render={(props) => <Ad firebase={this.state.campaign} {...props}/>} />
<Route path="/new/" render={(props) => <NewC add={this.addMessage} {...props}/>} />
*/}

<Route exact path="/" render={(props) => <ListC message={this.state.campaign} {...props}/>} />

      </div>
    );
  }
}

export default App;