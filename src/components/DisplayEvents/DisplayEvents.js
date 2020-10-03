import React from 'react';
import './DisplayEvents.css';

//DisplayEvents Component that forms the basic template for displaying events
//Receives events props from DisplayEventsList Component which contains event information
class DisplayEvents extends React.Component{
  //Checks date format and correctly display it
  formatDate(){
    return this.props.events.date.split('T')[0]
  }
  render(){
    return (
      <div className="eventscontainer"> {/*Main container*/}
        <div className="events">  {/*Display text: Event Details*/}
          <h2>Event Details</h2>
          <div className="eventdetailcontainer">  {/* sub container to display retrieved information about events*/}
            <div className="eventdetail">
              <h3>Venue</h3>
              <p>{this.props.events.venue}</p> {/*Displays Venue*/}
            </div>
            <div className="eventdetail">
              <h3>City</h3>
              <p>{this.props.events.city}</p> {/*Display City*/}
            </div>
          </div>
          <div className="eventdetailcontainer">
            <div className="eventdetail">
              <h3>Country</h3>
              <p>{this.props.events.country}</p> {/*Display Country*/}
            </div>
            <div className="eventdetail">
              <h3>Date</h3>
              <p>{this.formatDate()}</p> {/*Display Date*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayEvents;
