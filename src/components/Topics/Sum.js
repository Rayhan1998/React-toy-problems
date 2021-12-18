import React from "react";
export default class FilterString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  inputHandler = e => {
    this.setState({
      number1: parseInt(e.target.value)
    });
  };
  inputHandlerTwo = e => {
    this.setState({
      number2: parseInt(e.target.value)
    });
  };

  buttonHander = e => {
    this.setState({
      sum: this.state.number1 + this.state.number2
    });
  };

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>

        <input className="inputLine" onChange={this.inputHandler}></input>
        <input className="inputLine" onChange={this.inputHandlerTwo}></input>

        <button className="confirmationButton" onClick={this.buttonHander}>
          Submit
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}
