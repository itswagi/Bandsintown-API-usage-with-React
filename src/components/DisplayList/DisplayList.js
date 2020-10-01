import React from 'react';
import './DisplayList.css';
import DisplayProfile from '../DisplayProfile/DisplayProfile';

class DisplayList extends React.Component{
  render(){
    return(
      <div className="DisplayList">
      {
        this.props.artist.map( artists => {
          return <DisplayProfile artist={artists} key={artists.id}/>
        })
      }

      </div>
    )
  }
}

export default DisplayList;
