import React from 'react';
import './App.css';
import DisplayList from '../DisplayList/DisplayList'
import Search from '../Search/Search';
import DisplayEventsList from '../DisplayEventsList/DisplayEventsList'
import {Api} from '../../util/Api';
import {EventApi} from '../../util/Api';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profiles: [],
      events: []
    };
    this.searchApi = this.searchApi.bind(this);
  }
  searchApi(artist){
    Api.search(artist).then(profiles => {
      this.setState({profiles: profiles});
    });
    EventApi.search(artist).then( events => {
      this.setState({events: events});
    });
  }
  render(){
    return (
      <div className="mainContainer">
        <Search searchApi={this.searchApi}/>
        <DisplayList artist={this.state.profiles}/>
        <DisplayEventsList eventsList={this.state.events}/>
      </div>
    )
  }
}

export default App;
