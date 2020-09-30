import React from 'react';
import './Search.css';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {artist:''};
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearchQuery(event){
    this.setState({artist: event.target.value})
  }
  handleSearch(event){
    this.props.searchApi(this.state.artist)
    event.preventDefault()
  }
  render(){
    return(
      <div className="searchcontainer">
          <input placeholder="Search Artist..." onChange={this.handleSearchQuery} />
          <div className="search-submit">
            <a onClick={this.handleSearch}>Search</a>
          </div>
      </div>
    )
  }
}

export default Search;
