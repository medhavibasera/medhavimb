import React from "react";
import Card from "./Card";

class Cards extends React.Component {
  state = { msg: null };

  flashFn = (m) => {
    this.setState({ msg: m });
    setTimeout(() => {
      this.setState({ msg: null });
    }, 2000);
  };
  render() {
    return (
      <div>
        <Card flashFn={this.flashFn} />
      </div>
    );
  }
}

export default Cards;
