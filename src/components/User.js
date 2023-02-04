import React, { Component } from 'react'

export class User extends Component {
    render() {

        const {login, avatar_url, html_url, follwers} = this.props.user;

        return (
        <div className='card mb-3'>
            <div className="row">
                <div className='col-md-3'>
                    <img className='img-fluid rounded-start avatar' src={avatar_url}  alt={login}/>
                </div>
                <div className='col-md-9'>
                    <div className='card-body'>
                        <h3 className='card-title'>{login}</h3>
                        <p>{follwers}</p>
                        <a target="_blank" className='btn btn-primary' href={html_url}>Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default User