
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Componen) {

   return class WithMouse extends Component {

    state = {
      mouse: {x: undefined , y: undefined}
    }

    onMouseMovement = (event) => {
      console.log(event.clientX)
     this.setState({
       mouse: {x: event.clientX, y: event.clientY}
     })
    }
    render() {
        return (
          <div className ="mouse" onMouseMove={this.onMouseMovement}>
           <Component mouse={this.state.mouse} {...this.props} />
           </div>
        )
    }

   }

  
}

class App extends React.Component {
  
  
  render() {
    console.log(this.props)
    const { mouse } = this.props;

    return (
      <div className="container" >
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
