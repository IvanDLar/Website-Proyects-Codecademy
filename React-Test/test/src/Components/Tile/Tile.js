import React from "react";
import { Button } from "../Button/Button";

export class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ivan",
      age: 25,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const age = target.age;

    this.setState({
      [name]: value,
      [age]: value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              name="Name"
              type="text"
              checked={this.state.name}
              onChange={this.handleClick}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={this.state.age}
              onChange={this.handleClick}
            />
          </label>
        </form>
        <h1>{this.state.day}</h1>
        <Button onClick={this.handleClick} />
      </div>
    );
  }
}
