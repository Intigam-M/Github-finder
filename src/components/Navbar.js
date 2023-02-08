import React from 'react'

const Navbar = (props) => {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
            <a href="/" className='navbar-brand'>
              <i className={props.icon}></i> {props.title}
            </a>
        </div>
      </nav>
    )
}

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'bi bi-github'
}

export default Navbar