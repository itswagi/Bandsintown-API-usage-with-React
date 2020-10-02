import React from 'react';
import './DisplayEvents.css';

class DisplayEvents extends React.Component{
  formatDate(){
    return this.props.events.date.split('T')[0]
  }
  render(){
    return (
      <div className="eventscontainer">
        <div className="events">
          <h2>Event Details</h2>
          <div className="eventdetailcontainer">
            <div className="eventdetail">
              <h3>Venue</h3>
              <p>{this.props.events.venue}</p>
            </div>
            <div className="eventdetail">
              <h3>City</h3>
              <p>{this.props.events.city}</p>
            </div>
          </div>
          <div className="eventdetailcontainer">
            <div className="eventdetail">
              <h3>Country</h3>
              <p>{this.props.events.country}</p>
            </div>
            <div className="eventdetail">
              <h3>Date</h3>
              <p>{this.formatDate()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayEvents;
