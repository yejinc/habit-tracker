import React, { Component } from "react";
import HabitItem from "./HabitItem";

export default class HabitList extends Component {
  state = {
    habits: [
      { id: 1, name: "meditation", count: 0 },
      { id: 2, name: "spazieren gehen", count: 0 },
      { id: 3, name: "journaling", count: 0 },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <HabitItem key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}
