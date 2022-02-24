import React, { Component } from "react";

export default class GNB extends Component {
  render() {
    return (
      <nav
        className="gnb 
        flex inline-flex md:flex-col
        justify-between md:justify-start 
        items-center md:items-end
        pt-8 pb-10 md:pb-0 
        md:mr-8
        w-full md:w-1/4 
        border-solid border-b-2 md:border-b-0 border-zinc-800"
      >
        <h2
          className="gnb-title 
          md:mb-8
          text-4xl text-right"
        >
          habit tracker
        </h2>
        <strong
          className="gnb-counter 
          px-4 py-2 
          font-light text-3xl 
          rounded-full 
          text-zinc-100 bg-orange-600"
        >
          {this.props.totalCounts}
        </strong>
      </nav>
    );
  }
}
