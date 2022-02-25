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
    const habitItemInfos = this.state.habitItemInfos.map((item) => {
      if (item.id === habitItemInfo.id) {
        return { ...habitItemInfo, count: habitItemInfo.count + 1 };
      }
      return item;
    });
    this.setState({ habitItemInfos });
  };

  handleDecrement = (habitItemInfo) => {
    const habitItemInfos = this.state.habitItemInfos.map((item) => {
      if (item.id === habitItemInfo.id) {
        const count = habitItemInfo.count - 1;
        return { ...habitItemInfo, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habitItemInfos });
  };

  handleDelete = (habitItemInfo) => {
    const habitItemInfos = this.state.habitItemInfos.filter(
      (item) => item.id !== habitItemInfo.id
    );
    this.setState({ habitItemInfos });
  };

  handleAdd = (name) => {
    const habitItemInfos = [
      ...this.state.habitItemInfos,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({ habitItemInfos });
  };

  handleReset = () => {
    const habitItemInfos = this.state.habitItemInfos.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });

    this.setState({ habitItemInfos });
  };

  render() {
    return (
      <div
        className="App 
        box-border m-0
        flex flex-wrap flex-col lg:flex-row
        justify-start items-start
        px-10 lg:px-12
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
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}
