import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/tv">TV</a>
          </li>
          <li>
            <a href="/Search">Search</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
