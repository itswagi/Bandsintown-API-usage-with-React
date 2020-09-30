import React from 'react';
import './DisplayList.css';
import DisplayProfile from '../DisplayProfile/DisplayProfile';

class DisplayList extends React.Component{
  render(){
    return(
      <div className="DisplayList">
            <DisplayProfile artist={this.props.artist} key={this.props.artist.id}/>
      </div>
    )
  }
}

export default DisplayList;
