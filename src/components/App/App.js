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
      events: [],
      display: 'none',
      apiCallFinished: false,
      callEvents: false
    };
    this.searchApi = this.searchApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  searchApi(artist){
    Api.search(artist).then(profiles => {
      this.setState({display: 'none'})
      this.setState({profiles: [profiles]});
    });
    EventApi.search(artist).then( events => {
      this.setState({events: events, apiCallFinished: true});
    });
  }
  handleClick(){
    this.setState({display: 'block'})
  }
  render(){
    const noEvent = this.state.events.length
    let Alert;
    if(this.state.apiCallFinished && noEvent === 0){
        Alert = <span>No Upcomming Events</span>
    }else{
        Alert = <DisplayEventsList eventsList={this.state.events}/>
    }
    return (
      <div className="mainContainer">
        <Search searchApi={this.searchApi}/>
        <div onClick={this.handleClick}>
        <DisplayList artist={this.state.profiles} />
        </div>
        <div style={{display: `${this.state.display}`}}>
        {Alert}
        </div>
      </div>
    )
  }
}

export default App;
