import React, { Component } from "react";

export default class HabitItem extends Component {
  handleIncrement = (e) => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = (e) => {
    const countDecrement = this.state.countDecrement - 1;
    this.setState({ count: countDecrement < 0 ? 0 : countDecrement });
  };

  render() {
    const { name, count } = this.props.habit;

    return (
      <li>
        <p className="habit-name">{name}</p>
        <strong className="habit-counter">{count}</strong>
        <button
          className="btn-habit btn-increase"
          onClick={this.handleIncrement}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
        <button
          className="btn-habit btn-decrease"
          onClick={this.handleDecrement}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
        <button className="btn-habit btn-delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}
