import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Pesto" };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Updated!");
    console.log({ prevProps, prevState });
    console.log(`Current state: ${this.state.name}`);
  }

  componentWillUnmount() {
    console.log("Good night, Pesto!");
  }

  onClickHandler() {
    this.setState({ name: "Yash" });
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button
          type="button"
          name="updateTrigger"
          onClick={this.onClickHandler}
        >
          Trigger Update
        </button>
      </div>
    );
  }
}

export default LifeCycle;
