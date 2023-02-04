import Navbar from './components/Navbar'
import UserList from './components/UserList';
import React, { Component } from 'react'

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => this.setState({users: data, loading: false}))
    }

    render() {
        return (
        <div>
            <Navbar />
            <div className="container mt-3">
                <UserList users={this.state.users} key={this.state.users.id} loading={this.state.loading}  />
            </div>
        </div>
        );
    }
}

export default App



