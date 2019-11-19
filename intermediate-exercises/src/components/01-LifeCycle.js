import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.greet = this.greet.bind(this);
    this.name = React.createRef();
  }

  componentDidMount() {
    console.log("I'm mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  greet(event) {
    event.preventDefault();
    this.setState({ name: this.name.current.value });
  }

  render() {
    const { name } = this.state;
    return (
      <React.Fragment>
        <p> Good morning, {name}! </p>
        <label htmlFor="name"> Your Name </label>
        <input type="text" name="name" id="name" ref={this.name} />
        <button type="button" onClick={this.greet}> Greet </button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
