//Imports
import React from 'react';
import './App.css';
import DisplayList from '../DisplayList/DisplayList'
import Search from '../Search/Search';
import DisplayEventsList from '../DisplayEventsList/DisplayEventsList'
import {Api} from '../../util/Api';
import {EventApi} from '../../util/Api';

//Main Component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [], //Stores artists profiles fetched from the API
      events: [], //Stores events fetched from the API
      display: 'hidden',  //Triggers visibility of DisplayEventsList Component
      apiCallFinished: false, //Flag to check if API calls have been completed
      callEvents: false //Flag to check if the program needs to call the EventApi for events list
    };
    this.searchApi = this.searchApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //Perform API Calls and returns profiles and events in component state: profiles and events
  searchApi(artist){
    //Search for artist information and store result in state.profiles
    Api.search(artist).then(profiles => {
      this.setState({display: 'none'})  //Toggles CSS Style display property for DisplayEventsList Component
      this.setState({profiles: [profiles]});  //Set state for storing retrieved profiles
    });
    //Search for event list and store result in state.events
    EventApi.search(artist).then( events => {
      this.setState({events: events, apiCallFinished: true}); //Set state for storing events and toggles state.apiCallFinished to signal end of api calls
    });
  }
  //handleClick toggles CSS style display property of <div> encapsulating Alert which contains DisplayEventsList
  handleClick(){
    this.setState({display: 'flex'})
  }

  render(){
    const noEvent = this.state.events.length //Stores number of events retrieved in noEvent
    let Alert;
    if(this.state.apiCallFinished && noEvent === 0){ //Toggles between showing DisplayEventsList or showng a message 'No Upcomming Event' depending on if events were retrieved
        Alert = <span>No Upcomming Events</span>
    }else{
        Alert = <DisplayEventsList eventsList={this.state.events}/>
    }

    return (
      <div className="mainContainer"> {/*Container encapsulating all components*/}
        <Search searchApi={this.searchApi}/> {/*Search Component that is passed searchApi method in props*/}
        <div onClick={this.handleClick}>  {/*onClick toggles visibility of DisplayEventsList or Alert*/}
        <DisplayList artist={this.state.profiles} /> {/*DisplayList Component that displays artist profiles*/}
        </div>
        <div style={{display: `${this.state.display}`}}> {/*Style of this div controlled by state.display*/}
        {Alert} {/*Displays either DisplayEventsList or span element*/}
        </div>
      </div>
    )
  }
}

export default App;
