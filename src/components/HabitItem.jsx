import React, { PureComponent } from "react";

export default class HabitItem extends PureComponent {
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
      <li
        className="habit-item
        flex justify-between 
        grow shrink-0
        py-4 px-2
        w-full
        border-solid border-b-2 border-zinc-800
        "
      >
        <div
          className="text-group 
          flex justify-center items-center"
        >
          <p
            className="habit-name 
            mr-4
            font-extralight text-2xl
          "
          >
            {name}
          </p>
          <strong
            className="habit-counter
            flex 
            justify-center items-center
            px-4 py-2 
            font-light text-md
            rounded-full
            text-orange-700 bg-zinc-800"
          >
            {count}
          </strong>
        </div>
        <div
          className="button-group 
          flex 
          justify-end items-center
          gap-2"
        >
          <button
            className="btn-habit btn-increase
            flex
            justify-center items-center
            px-4 py-2 
            font-light text-md 
            rounded-full 
            text-zinc-700 bg-zinc-300"
            onClick={this.handleIncrement}
          >
            <i className="fa-solid fa-plus cursor-pointer"></i>
          </button>
          <button
            className="btn-habit btn-decrease
            flex
            justify-center items-center
            px-4 py-2
            font-light text-md 
            rounded-full 
            text-zinc-700 bg-zinc-300"
            onClick={this.handleDecrement}
          >
            <i className="fa-solid fa-minus cursor-pointer"></i>
          </button>
          <button
            className="btn-habit btn-delete
            flex  
            justify-center items-center
            px-4 py-2 
            font-light text-md 
            rounded-full 
            text-zinc-200 bg-red-600
            "
            onClick={this.handleDelete}
          >
            <i className="fa-solid fa-trash-can cursor-pointer"></i>
          </button>
        </div>
      </li>
    );
  }
}
