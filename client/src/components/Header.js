import React, { component, Component } from "react"

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">
            Startup Promoter
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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
