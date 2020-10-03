import React from 'react';
import './Search.css';

//This componennt renders the search bar and sends information to Api
class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {artist:''}; //Stores artist name
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.pressEnter = this.pressEnter.bind(this)
  }
  //Handles artist name entered in search bar and saves it in state.artist
  handleSearchQuery(event){
    const artistName = event.target.value.replace(" ", "%20") //Ensures no space in name, if there are, replaces that by %20 for url to work
    this.setState({artist: artistName}) //sets artist state to artist name entered in search bar
  }
  //handles clicking enter to search for artist
  handleSearch(event){
    //sends artist name as props to App Component which will send name to api
    this.props.searchApi(this.state.artist)
    event.preventDefault() //prevents default action occuring on clicking search button
  }
  //Handles pressing enter when artist name is entered for search
  pressEnter(event){
    if(event.key === 'Enter'){
      this.handleSearchQuery(event)
      this.handleSearch(event)
    }
  }
  render(){
    return(
      <div className="searchcontainer"> {/*Main container*/}
          <input placeholder="Search Artist..." onChange={this.handleSearchQuery} onKeyUp={this.pressEnter}/> {/*SearchBar*/}
          <div className="search-submit"> {/*Submit button*/}
            <a onClick={this.handleSearch}>Search</a>
          </div>
      </div>
    )
  }
}

export default Search;
