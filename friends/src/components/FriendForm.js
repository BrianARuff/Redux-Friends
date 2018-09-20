import React from 'react';
import {connect} from 'react-redux';
import {addNewFriend} from '../actions';

class FriendForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = () => {
    this.props.addNewFriend(this.state);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Name" name="name" onChange={this.handleOnChange}/>
        <input type="text" placeholder="Age" name="age" onChange={this.handleOnChange}/>
        <input type="text" placeholder="Email" name="email" onChange={this.handleOnChange}/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }
}

export default connect(null, {addNewFriend})(FriendForm);