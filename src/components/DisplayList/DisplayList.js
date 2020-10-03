import React from 'react';
import './DisplayList.css';
import DisplayProfile from '../DisplayProfile/DisplayProfile';


//DisplayList dynamically renders artist profiles depending on how many artist were retrieved from Api
//Receives artist information in artist props from App Component stored in state.profiles of App component
class DisplayList extends React.Component{
  render(){
    return(

      <div className="DisplayList"> {/*Main Container*/}
      {
        this.props.artist.map( artists => {
          {/*checks if artist information present or not, displays Artist not found message*/}
          {/*else displays Artist's profile*/}
          {/*also sets key for map to work correctly*/}
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
