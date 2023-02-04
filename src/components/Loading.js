import React, { Component } from 'react'

export class loading extends Component {
  render() {
    return (
        <div className='d-flex.justify-content-center'>
            <div className='spinner-grow text-primary'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    )
  }
}

export default loading