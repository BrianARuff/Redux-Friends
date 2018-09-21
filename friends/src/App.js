import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchFriends} from './actions';
import {connect} from 'react-redux';
import FriendForm from './components/FriendForm';
import {Route, Link, withRouter} from 'react-router-dom';
import FriendsList from './components/FriendsList';


class App extends Component {

  state = {
    reload: false,
  }

  componentDidMount = () => {
    this.props.fetchFriends();
    this.setState({reload: !this.state.reload})
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? <img src={logo} alt="Logo"/> 
        : this.props.friends ?
          <div>
          <Route exact path="/newFriend" component={FriendForm} />
          <Link to="/newFriend">Add New Friend!!</Link>
          <Route exact path="/" render={() => <FriendsList friends={this.props.friends} />} />
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

export default withRouter(connect(mapStateToProps, {fetchFriends})(App));
