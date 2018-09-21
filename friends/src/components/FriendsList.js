import React from 'react';
import Friend from '../components/Friend';


class FriendList extends React.Component {
  render() {
    return (
      <div>
        {this.props.friends.map(friend => {
          return (
            <Friend key={friend.id} friend={friend} />
          )
        })}
      </div>
    )
  }
}

export default FriendList;