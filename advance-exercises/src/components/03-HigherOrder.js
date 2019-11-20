import React from 'react';
import PropTypes from 'prop-types';

function withMouse(App) {
  return function captureMouse() {
    const [x, setX] = React.useState(0);
    const [y, setY] = React.useState(0);

    function onMouseMove(event) {
      setX(event.clientX);
      setY(event.clientY);
    }

    return (
      <div onMouseMove={onMouseMove}>
        <App mouse={{ x, y }} />
      </div>
    );
  };
}

class App extends React.PureComponent {
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
