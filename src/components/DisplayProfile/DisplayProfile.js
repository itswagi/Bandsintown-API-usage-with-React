import React from 'react';
import './DisplayProfile.css';



class DisplayProfile extends React.Component{
  render(){
    return (
      <div className="profile">
        <div className="image">
          <img src={this.props.artist.image_url} alt={this.props.artist.name} />
        </div>
        <div className="information">
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
