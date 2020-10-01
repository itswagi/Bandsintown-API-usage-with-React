import React from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-transition-group';
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
      display: 'none'
    };
    this.searchApi = this.searchApi.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  searchApi(artist){
    Api.search(artist).then(profiles => {
      this.setState({profiles: [profiles]});
    });
    EventApi.search(artist).then( events => {
      this.setState({events: events});
    });
  }
  handleClick(){
    this.setState({display: 'block'})
  }
  render(){
    return (
      <div className="mainContainer">
        <Search searchApi={this.searchApi}/>
        <div onClick={this.handleClick}>
        <DisplayList artist={this.state.profiles} />
        </div>
        <div style={{display: `${this.state.display}`}}>
        <DisplayEventsList eventsList={this.state.events}/>
        </div>
      </div>
    )
  }
}

export default App;
