import React from 'react';
import './Search.css';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {artist:''};
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.pressEnter = this.pressEnter.bind(this)
  }
  handleSearchQuery(event){
    const artistName = event.target.value.replace(" ", "%20")
    this.setState({artist: artistName})
  }
  handleSearch(event){
    this.props.searchApi(this.state.artist)
    event.preventDefault()
  }
  pressEnter(event){
    if(event.key === 'Enter'){
      const artistName = event.target.value.replace(" ", "%20")
      this.setState({artist: artistName})
      this.props.searchApi(this.state.artist)
      event.preventDefault()
    }
  }
  render(){
    return(
      <div className="searchcontainer">
          <input placeholder="Search Artist..." onChange={this.handleSearchQuery} onKeyUp={this.pressEnter}/>
          <div className="search-submit">
            <a onClick={this.handleSearch}>Search</a>
          </div>
      </div>
    )
  }
}

export default Search;
