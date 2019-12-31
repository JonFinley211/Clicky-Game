import React, { Component } from "react";
import "./style.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };

  componentDidUpdate({ currentScore, topScore }, prevState) {
    const newState = { animating: true };
console.log(newState)
    if (currentScore === 0 && topScore === 0) {
      newState.message = "";
    } else if (currentScore === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "correct";
    }

    if (currentScore !== this.props.currentScore || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "You guessed correctly!";
    case "incorrect":
      return "You guessed incorrectly!";
    default:
      return "Click an image to begin!";
    }
  };

  render() {
    return (
      <li
        className={this.state.animating ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ animating: false })}
      >
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
