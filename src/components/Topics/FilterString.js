import React from "react";
export default class FilterString extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: ["run", "shop", "walk"],
      userInput: "",
      filteredArray: []
    };
  }

  inputHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  buttonHander = e => {
    let filtArray = this.state.unFilteredArray.filter(
      string => string !== this.state.userInput
    );

    this.setState({
      filteredArray: filtArray
    });
  };

  render() {
    // console.log(this.state.filteredArray);
    console.log(this.state.userInput);
    return (
      <div className="puzzleBox  filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {this.state.unFilteredArray.map((string, i) => {
            return <p key={i}>{string}</p>;
          })}
        </span>

        <input className="inputLine" onChange={this.inputHandler}></input>
        <button className="confirmationButton" onClick={this.buttonHander}>
          Submit
        </button>
        <span className="resultsBox  filterStringRB">
          {this.state.filteredArray.map((string, i) => {
            return <p key={i}>{string}</p>;
          })}
        </span>
      </div>
    );
  }
}
