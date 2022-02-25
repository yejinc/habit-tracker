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
        flex flex-col md:flex-row
        justify-center items-bewteen md:justify-between md:items-start 
        flex-wrap
        gap-4 md:gap-0
        grow shrink-0
        py-6 px-4
        w-full
        border-solid border-b-2 border-zinc-800
        "
      >
        <div
          className="text-group 
          flex justify-start items-center
          grow
          w-full md:w-6/12
          "
        >
          <p
            className="habit-name 
            mr-4
            font-extralight text-2xl
            w-10/12 md:max-w-full
            break-words
            whitespace-normal
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
          justify-end items-start
          gap-2
          lg:ml-8"
        >
          <button
            className="btn-habit btn-increase
            flex
            justify-center items-center
            px-4 py-2 
            font-light text-md 
            rounded-full 
            text-zinc-700 bg-zinc-300
            transition duration-250 
            hover:ease-in-out
            hover:opacity-40 active:opacity-40
            "
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
            text-zinc-700 bg-zinc-300
            transition duration-250 
            hover:ease-in-out
            hover:opacity-40 active:opacity-40"
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
            transition duration-250 
            hover:ease-in-out
            hover:opacity-40 active:opacity-40
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
