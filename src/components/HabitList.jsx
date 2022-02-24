import React, { Component } from "react";
import HabitItem from "./HabitItem";

export default class HabitList extends Component {
  render() {
    return (
      <div className="habit-list" action="">
        <ul>
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

        <button className="habit-reset" onClick={this.props.onReset}>
          rset all
        </button>
      </div>
    );
  }
}
