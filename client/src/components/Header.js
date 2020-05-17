import React, { component, Component } from "react"

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Startup Promoter
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Log in with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
