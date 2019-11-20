import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Aditya" };

    this.callDidUpdate = this.callDidUpdate.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  callDidUpdate() {
    this.setState({ name: "Pesto" });
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log(`Good night ${this.state.name}!`);
  }

  // Task 4: Create a button which triggers ComponentDidUpdate lifecycle method on click.
  render() {
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    return (
      <button type="button" onClick={this.callDidUpdate} value="Click Me!">
        Click Me!
      </button>
    );
  }
}

export default LifeCycle;
