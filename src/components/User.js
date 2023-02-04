import React, { Component } from 'react'

export class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 'id',
            login: 'mojombo',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/mojombo',
            follwers: 1000,
        }
    }

    render() {
        return (
        <div className='card mb-3'>
            <div className="row">
                <div className='col-md-3'>
                    <img className='img-fluid rounded-start' src={this.state.avatar_url}  alt={this.state.login}/>
                </div>
                <div className='col-md-9'>
                    <div className='card-body'>
                        <h3 className='card-title'>{this.state.login}</h3>
                        <p>{this.state.follwers}</p>
                        <a target="_blank" className='btn btn-primary' href={this.state.html_url}>Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default User