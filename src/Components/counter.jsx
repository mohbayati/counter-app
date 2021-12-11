import React, { Component } from "react";
class Counter extends React.Component {
  //   state = {
  //     value: this.props.counter.value,
  //     //tags: ["tag1", "tag2", "tag3"],
  //   };
  //   handleIncriment = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };
  render() {
    //if (this.state.tags.length === 0) return <p>this is not any data</p>;
    return (
      <div>
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncriment(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecriment(this.props.counter)}
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm "
        >
          {" "}
          x
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
