import Navbar from './components/Navbar'
import UserList from './components/UserList';
import React, { Component } from 'react'
import Search from './components/Search';
import Alert from './components/Alert';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            users: [],
            error: null
        }
    }


    searchUsers = (text) => {
        this.setState({loading: true});
        fetch(`https://api.github.com/search/users?q=${text}`)
        .then(res => res.json())
        .then(data => this.setState({users: data.items, loading: false}))
    }

    clearResult = () => {
        this.setState({users: []});
    }

    displayAlert = (msg, type) => {
        this.setState(  { error:{msg, type} }  );
        setTimeout(() => {
            this.setState({error: null});
        }
        , 3000);
    }

    render() {
        return (
        <div>
            <Navbar />
            <Search 
                searchUsers={this.searchUsers} 
                clear={this.clearResult} 
                clearButton={this.state.users.length > 0 ? true : false} 
                displayAlert={this.displayAlert} />
            <Alert error={this.state.error}/> 

            <div className="container mt-3">
                <UserList users={this.state.users} key={this.state.users.id} loading={this.state.loading} />
            </div>
        </div>
        );
    }
}

export default App



