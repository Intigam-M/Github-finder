import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a href="/" className='navbar-brand'>
          <i className={this.props.icon}></i> {this.props.title}
        </a>
      </nav>
    )
  }
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'bi bi-github'
}



export default Navbar