import React, { Component } from "react";
import HabitItem from "./HabitItem";
import AddForm from "./AddForm";

export default class HabitList extends Component {
  render() {
    return (
      <div
        className="habit-list 
        flex flex-col flex-wrap
        justify-start items-start
        grow shrink-0
        gap-12
        py-8 md:px-12 
        w-full  md:w-auto
        border-solid border-zinc-800 md:border-l-2"
        action=""
      >
        <AddForm onAdd={this.props.onAdd} />

        <ul
          className="habit-items 
          flex flex-col flex-wrap
          justify-start items-start
          grow shrink-0
          gap-4
          w-full
          font-light"
        >
          {this.props.habitItemInfos.map((habitItemInfo) => (
            <HabitItem
              key={habitItemInfo.id}
              habitItemInfo={habitItemInfo}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>

        <button
          className="habit-reset
          flex
          justify-center items-center
          px-8 py-4
          font-normal text-sm
          rounded-full
          text-orange-400 
          border-solid border-2 border-orange-400
          "
          onClick={this.props.onReset}
        >
          <i
            className="fa-solid fa-arrow-rotate-right
          block mr-2"
          ></i>
          reset all
        </button>
      </div>
    );
  }
}
