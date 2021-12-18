import React from "react";
export default class FilterString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  inputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  buttonHander = e => {
    let word = this.state.userInput;

    if (
      word ===
      word
        .split("")
        .reverse()
        .join("")
    ) {
      this.setState({
        palindrome: word
          .split("")
          .reverse()
          .join("")
      });
    } else {
      console.log("word is not a palindrome");
    }
  };

  render() {
    return (
      <div className="puzzleBox  filterStringPB">
        <h4>Palindrome</h4>

        <input className="inputLine" onChange={this.inputHandler}></input>
        <button className="confirmationButton" onClick={this.buttonHander}>
          Submit
        </button>
        <span className="resultsBox">{this.state.palindrome}</span>
      </div>
    );
  }
}
