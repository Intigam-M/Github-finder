import React, { Component } from 'react'

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onChange = (e) => {
        this.setState({text: e.target.value});
    }


    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.text === '') {
            this.props.displayAlert('Please enter something', 'danger');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }

    }


    render() {
        return (
        <div className="container my-3">
            <form onSubmit={this.onSubmit}>
                <div className="input-group">
                    <input type="text" value={this.state.text} onChange={this.onChange} className='form-control' placeholder='Search User' />
                    <button className='btn btn-primary' type='submit'>Search</button>
                </div>
            </form>
            {
                this.props.clearButton && <button onClick={this.props.clear} className='btn btn-danger mt-2 col-12'>Clear result</button>
            }
        </div>
        )
    }
}

export default Search