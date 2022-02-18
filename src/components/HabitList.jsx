import React, { Component } from "react";
import HabitItem from "./HabitItem";

export default class HabitList extends Component {
  state = {
    habits: [
      { name: "meditation", count: 0 },
      { name: "spazieren gehen", count: 0 },
      { name: "journaling", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <HabitItem habit={habit} />
        ))}
      </ul>
    );
  }
}