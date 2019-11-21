import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

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
    const { colors } = this.state;
    const colorListComponent = () => (
      <ColorList colors={colors} />
    );

    const ColorComponent = (props) => {
      const color = colors.filter(color => color.name === props.match.params.color)[0];
      if (color) {
        return <Color color={color} />
      }
      return <Redirect to="/" />
    };

    const NewColorComponent = (props) => {
      return <NewColor addColor={this.handleAdd} history={props.history} />;
    };

    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/colors" component={colorListComponent} />
        <Route path="/colors/new" component={NewColorComponent} />
        <Route path="/colors/:color" component={ColorComponent} />
        <Route component={colorListComponent} />
        <Redirect from="/" to="/colors" />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
