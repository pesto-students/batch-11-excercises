import React from 'react';


class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

 
  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log("Updated!");
  }

  componentWillUnmount() {

    console.log(`Good night, ${this.state.name}!`);
  }

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={() => this.setState({name: 'Koushik'})}>change state</button>
      </div>);
  }
}

export default LifeCycle;
