import React from "react";
export default class EvenAndOdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  inputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  buttonHander = e => {
    if (this.state.userInput % 2 === 0) {
      this.setState({
        evenArray: [...this.state.evenArray, this.state.userInput]
      });
    } else if (this.state.userInput % 2 === 1) {
      this.setState({
        oddArray: [...this.state.oddArray, this.state.userInput]
      });
    }
    console.log(this.state.evenArray);
  };

  render() {
    return (
      <div className="puzzleBox evenAndOdd">
        <h4>Even and Odds</h4>
        <input className="inputLine" onChange={this.inputHandler}></input>
        <button className="confirmationButton" onClick={this.buttonHander}>
          Submit
        </button>
        <span className="resultsBox">{this.state.evenArray.join()}</span>
        <span className="resultsBox">{this.state.oddArray.join()}</span>
      </div>
    );
  }
}
