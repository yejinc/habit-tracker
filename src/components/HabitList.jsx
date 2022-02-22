import React, { Component } from "react";
import HabitItem from "./HabitItem";

export default class HabitList extends Component {
  state = {
    habitItemInfos: [
      { id: 1, name: "meditation", count: 0 },
      { id: 2, name: "spazieren gehen", count: 0 },
      { id: 3, name: "journaling", count: 0 },
    ],
  };

  onIncrement = (habitItemInfo) => {
    const habitItemInfos = [...this.state.habitItemInfos];
    const index = habitItemInfos.indexOf(habitItemInfo);
    habitItemInfos[index].count++;
    this.setState({ habitItemInfos });
  };

  onDecrement = (habitItemInfo) => {
    const habitItemInfos = [...this.state.habitItemInfos];
    const index = habitItemInfos.indexOf(habitItemInfo);
    const count = habitItemInfos[index].count - 1;
    habitItemInfos[index].count = count < 0 ? 0 : count;
    this.setState({ habitItemInfos });
  };

  onDelete = (habitItemInfo) => {
    const habitItemInfos = this.state.habitItemInfos.filter(
      (item) => item.id !== habitItemInfo.id
    );
    this.setState({ habitItemInfos });
  };

  render() {
    return (
      <ul>
        {this.state.habitItemInfos.map((habitItemInfo) => (
          <HabitItem
            key={habitItemInfo.id}
            habitItemInfo={habitItemInfo}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            onDelete={this.onDelete}
          />
        ))}
      </ul>
    );
  }
}
