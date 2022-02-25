import React, { PureComponent } from "react";

export default class GNB extends PureComponent {
  render() {
    return (
      <nav
        className="gnb 
        flex inline-flex lg:flex-col
        justify-between lg:justify-start 
        items-center lg:items-end
        pt-8 pb-10 lg:pb-0 
        lg:mr-8
        w-full lg:w-1/4 
        border-solid border-b-2 lg:border-b-0 border-zinc-800"
      >
        <h2
          className="gnb-title 
          lg:mb-8
          text-4xl sm:text-right"
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
