import React, { Component } from 'react'
import User from './User';

export class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: '1',
                    login: 'mojombo',
                    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                    html_url: ''
                },
                {
                    id: '2',
                    login: 'mojombo',
                    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
                    html_url: ''
                }
            ]
        }
    }

  render() {
    return (
      <div>

            {this.state.users.map(user => (
                <User user={user} key={user.id} />
            ))}

      </div>
    )
  }
}

export default UserList