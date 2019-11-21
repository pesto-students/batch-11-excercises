import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }
  render() {
    return (
      <Switch>
        <Route
          path='/colors/new'
          render={(props) => (
            <NewColor
              {...props}
              addColor={(newColor) => this.handleAdd(newColor)}
            />
          )}
        />
        <Route
          path='/colors:id'
          render={(props) => {
            const colorPassByParams = props.match.params.id.replace(':', '');
            const color = this.state.colors.find((i) => {
              return i.name === colorPassByParams;
            });
            return <Color color={color} />;
          }}
        />

        <Route
          path='/'
          exact
          render={() => <ColorList colors={this.state.colors} />}
        />
      </Switch>
    );
  }
}

export default App;
