import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <Link className="navbar-brand" to="/home">jackson fisher</Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link" >home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/videos">videos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shows">shows</Link>
              </li>
            </ul>
         </div>
       </nav>
    )
  }
}
