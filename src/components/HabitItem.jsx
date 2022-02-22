import React, { Component } from "react";

export default class HabitItem extends Component {
  handleIncrement = (habitItemInfo) => {
    this.props.onIncrement(this.props.habitItemInfo);
  };
  handleDecrement = (habitItemInfo) => {
    this.props.onDecrement(this.props.habitItemInfo);
  };
  handleDelete = (info) => {
    this.props.onDelete(this.props.habitItemInfo);
  };

  render() {
    const { name, count } = this.props.habitItemInfo;

    return (
      <li>
        <p className="habit-name">{name}</p>
        <strong className="habit-counter">{count}</strong>
        <button
          className="btn-habit btn-increase"
          onClick={this.handleIncrement}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <button
          className="btn-habit btn-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <button className="btn-habit btn-delete" onClick={this.handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}
