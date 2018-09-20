import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchFriends} from './actions';
import {connect} from 'react-redux';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends Component {

  componentDidMount = () => {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? <img src={logo} alt="Logo"/> 
        : this.props.friends ?
          <div>
            <FriendForm />
            {this.props.friends.map(friend => {
              return (
                <Friend key={friend.id} friend={friend} />
              )
            })}
          </div>    
        : <h1>Error</h1> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendReducer.friends,
    fetching: state.friendReducer.fetching,
    fetched: state.friendReducer.fetched,
    errors: state.friendReducer.errors,
  }
}

export default connect(mapStateToProps, {fetchFriends})(App);
