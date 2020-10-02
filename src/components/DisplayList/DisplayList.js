import React from 'react';
import './DisplayList.css';
import DisplayProfile from '../DisplayProfile/DisplayProfile';

class DisplayList extends React.Component{
  render(){
    return(
      <div className="DisplayList">
      {
        this.props.artist.map( artists => {
          console.log()
          if (artists.id === undefined || artists.id === null) {
            return <span key={1}>Artist Not Found</span>
          }else{
            return <DisplayProfile artist={artists} key={artists.id}/>
          }
        })
      }
      </div>
    )
  }
}

export default DisplayList;
