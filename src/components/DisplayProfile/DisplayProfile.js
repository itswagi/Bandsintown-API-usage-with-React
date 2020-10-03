import React from 'react';
import './DisplayProfile.css';

//Template to display artist information as passed in props from DisplayEventsList
//incoming props name is artist containing artist information
class DisplayProfile extends React.Component{
  render(){
    return (

      <div className="profile"> {/*Main Container*/}
        <div className="image"> {/*Displays artist image*/}
          <img src={this.props.artist.image_url} alt={this.props.artist.name} />
        </div>
        <div className="information"> {/*Displays artist name, and facebook url*/}
          <h2>{this.props.artist.name}</h2>
          <a href={this.props.artist.facebook}>{this.props.artist.facebook}</a>
        </div>
        <div className="showEvents">
          <p>View Events</p>
        </div>
      </div>
    )
  }
}

export default DisplayProfile;
