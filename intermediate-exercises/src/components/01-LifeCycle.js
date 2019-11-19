import React from 'react';
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }
  componentDidMount() {
    console.log("I'm Mounted")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!')
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good Night, Pesto !')
  }
  trigger = () => {
    this.setState({name: 'Pesto Pro'})
  }
  render() {
    return (
      <div>
        <button name="triggerButton" onClick={this.trigger}> Trigger  </button>
        <p>Good morning, {this.state.name}!</p>
        </div>
    );
  }
}

export default LifeCycle;
