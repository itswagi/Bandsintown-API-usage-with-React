import React from 'react';
import './DisplayEventsList.css';
import DisplayEvents from '../DisplayEvents/DisplayEvents';

class DisplayEventsList extends React.Component{
  render(){
    
    return(
      <div className="DisplayEventsList">
        {
          this.props.eventsList.map( events => {
          return <DisplayEvents events={events} key={events.id}/>
        })
        }
      </div>
    );
  }
}

export default DisplayEventsList;
