import React, {Component} from "react"

class Header extends Component{
    render() {
        return (
        <nav>
  <div class="nav-wrapper">
    <a href="/" class="brand-logo">Ashley's Portfolio</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="/Portfolio">Portfolio</a></li>
    </ul>
  </div>
</nav>
        )
    }
}
export default Header