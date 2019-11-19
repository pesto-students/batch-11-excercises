import React from 'react';
class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto', updating: false };
    this.clickHandle = this.clickHandle.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate() {
    console.log('Updated!');
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }
  clickHandle() {
    this.setState({
      updating: !this.state.updating,
    });
  }
  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button
          onClick={this.clickHandle}
          style={this.state.updating ? { color: 'Red' } : { color: 'Black' }}
        >
          Update Me
        </button>
      </div>
    );
  }
}

export default LifeCycle;
