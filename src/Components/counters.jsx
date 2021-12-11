import React from "react";
//import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncriment, onDecriment } =
      this.props;
    return (
      <div className="row">
        <div className="col-1">
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={(this, onReset)}
          >
            Reset
          </button>
        </div>
        <div className="col">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              counter={counter}
              onIncriment={onIncriment}
              onDecriment={onDecriment}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
