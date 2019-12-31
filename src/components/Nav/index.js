import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  console.log(props.score)
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <NavMessage currentScore={props.currentScore} topScore={props.topScore} />
        <li>
          Score: {props.currentScore} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
