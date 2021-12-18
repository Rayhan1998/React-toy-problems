import React from "react";
export default class FilterObject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unFilteredArray: [
        { todo: "run", completed: "true" },
        { todo: "cleaning", completed: "true" },
        { todo: "grocery-shopping", completed: "false" }
      ],
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
      todos => todos.completed === this.state.userInput
    );

    this.setState({
      filteredArray: filtArray
    });
  };

  render() {
    // console.log(this.state.filteredArray);
    console.log(this.state.userInput);
    return (
      <div className="puzzleBox FilterObject">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {this.state.unFilteredArray.map((todos, i) => {
            return <p key={i}>{todos.todo}</p>;
          })}
        </span>
        <h4>
          Type true or false to get a list of todos that are either completed or
          not
        </h4>
        <input className="inputLine" onChange={this.inputHandler}></input>
        <button className="confirmationButton" onClick={this.buttonHander}>
          Submit
        </button>

        <span className="resultsBox filterObjectRB">
          {this.state.filteredArray.map((todos, i) => {
            return <p key={i}>{todos.todo}</p>;
          })}
        </span>
      </div>
    );
  }
}
