/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class Inner extends Component {
    constructors(props) {
      this.props = props;
    }
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = (event) => {
      this.setState({ x: event.clientX, y: event.clientY})
    }
    render() {
      const mouse = {
        x: this.state.x,
        y: this.state.y
      }
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component mouse={mouse} {...this.props}/>
        </div>
      );
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
