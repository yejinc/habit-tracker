import React, { PureComponent } from "react";

export default class AddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value("");
  };

  render() {
    return (
      <form
        className="add-form
      flex
      justify-between items-center
      grow shrink-0
      h-14 w-full
      font-light"
        onSubmit={this.onSubmit}
        ref={this.formRef}
      >
        <input
          ref={this.inputRef}
          className="add-input
          py-1 px-6
          w-9/12 h-full
          font-light text-zinc-900
          rounded-full
          border-solid border-2 border-zinc-300
          transition duration-250 
          hover:ease-in-out 
          placeholder:font-light placeholder:italic placeholder:text-zinc-300
          disabled:bg-zinc-50 disabled:text-zinc-500 disabled:border-zinc-200 disabled:shadow-none
          focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "
          type="text"
          maxLength={23}
          placeholder="our habits become our values, our values become our destiny"
        />

        <button
          className="btn-add
          ml-4
          w-3/12 h-full
          font-light text-xl md:text-2xl 
          rounded-full
          bg-orange-600 
          transition duration-250 
          hover:ease-in-out 
          hover:opacity-40 active:opacity-40
          "
          type="submit"
        >
          add
        </button>
      </form>
    );
  }
}
