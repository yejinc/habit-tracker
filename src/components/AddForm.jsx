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
      <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          className="add-input"
          type="text"
          placeholder="our habits become our values, our destiny"
        />

        <button className="btn-add" type="submit">
          add
        </button>
      </form>
    );
  }
}
