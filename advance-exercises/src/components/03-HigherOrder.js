// eslint-disable-next-line import/no-unresolved
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          x: 0,
          y: 0,
        },
      };
      this.handleMouseEvent = this.handleMouseEvent.bind(this);
    }

    componentDidMount() {
      // eslint-disable-next-line no-undef
      window.document.addEventListener('mousemove', this.handleMouseEvent);
    }

    handleMouseEvent(event) {
      this.setState({
        mouse: {
          x: event.clientX,
          y: event.clientY,
        },
      });
    }

    render() {
      const { mouse } = this.state;
      return (
        <Component
          mouse={mouse}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...this.props}
        />
      );
    }
  };
}

function App(props) {
  const { mouse } = props;
  return (
    <div className="container">
      {mouse ? (
        <h1>
          The mouse position is (
          {mouse.x}
          ,
          {' '}
          {mouse.y}
        )
        </h1>
      ) : (
        <h1>We don&#39;t know the mouse position yet :(</h1>
      )}
    </div>
  );
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
