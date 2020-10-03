import React from 'react';
import './DisplayEventsList.css';
import DisplayEvents from '../DisplayEvents/DisplayEvents';


//DisplayEventsList Component renders dynamically renders events from events template in DisplayEvents Component
//Receives eventslist props from App Component containing events list as stored in state.events of App Component
class DisplayEventsList extends React.Component{
  render(){

    return(
      <div className="DisplayEventsList"> {/*Main Container*/}
        { /*using map function to iterate through as many events were retrieved and
          render that many DisplayEvents Components  with respective event information
          also sets key for map to work*/
          this.props.eventsList.map( events => {
          return <DisplayEvents events={events} key={events.id}/>
        }) 
        }
      </div>
    );
  }
}

export default DisplayEventsList;
