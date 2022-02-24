import React, { Component } from "react";
import GNB from "./components/GNB";
import HabitList from "./components/HabitList";

export default class App extends Component {
  state = {
    habitItemInfos: [
      { id: 1, name: "meditation", count: 0 },
      { id: 2, name: "spazieren gehen", count: 0 },
      { id: 3, name: "journaling", count: 0 },
    ],
  };

  handleIncrement = (habitItemInfo) => {
    const habitItemInfos = [...this.state.habitItemInfos];
    const index = habitItemInfos.indexOf(habitItemInfo);
    habitItemInfos[index].count++;
    this.setState({ habitItemInfos });
  };

  handleDecrement = (habitItemInfo) => {
    const habitItemInfos = [...this.state.habitItemInfos];
    const index = habitItemInfos.indexOf(habitItemInfo);
    const count = habitItemInfos[index].count - 1;
    habitItemInfos[index].count = count < 0 ? 0 : count;
    this.setState({ habitItemInfos });
  };

  handleDelete = (habitItemInfo) => {
    const habitItemInfos = this.state.habitItemInfos.filter(
      (item) => item.id !== habitItemInfo.id
    );
    this.setState({ habitItemInfos });
  };

  render() {
    return (
      <div
        className="App 
        flex flex-wrap flex-col md:flex-row
        justify-start items-start
        px-4 md:px-12
        w-screen h-full
        font-sans font-normal lowercase
        text-zinc-300 bg-zinc-900
        antialiased subpixel-antialiased "
      >
        <GNB
          totalCounts={
            this.state.habitItemInfos.filter((item) => item.count > 0).length
          }
        />

        <HabitList
          habitItemInfos={this.state.habitItemInfos}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
