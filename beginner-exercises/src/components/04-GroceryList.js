// eslint-disable-next-line import/no-unresolved
import React from 'react';
import '../App.css';
import GroceryListItem from './GroceryListItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      typedGroceryName: '',
    };
    this.addGroceries = this.addGroceries.bind(this);
    this.handleGroceryTyped = this.handleGroceryTyped.bind(this);
  }

  handleGroceryTyped(event) {
    this.setState({ typedGroceryName: event.target.value });
  }

  addGroceries() {
    const { typedGroceryName } = this.state;
    if (!typedGroceryName) {
      return;
    }
    const { groceries } = this.state;
    const newGrocery = { name: typedGroceryName };
    this.setState({ groceries: groceries.concat(newGrocery) });
  }

  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map((item) => ( // eslint-disable-line no-unused-vars
      // eslint-disable-next-line react/jsx-filename-extension
      <GroceryListItem grocery={item} />
    ));
    return (
      <div>
        <input name="groceryName" type="text" onChange={this.handleGroceryTyped} />
        <button type="submit" name="submit" onClick={this.addGroceries}> Add </button>
        <ul>
          {groceriesComponents}
        </ul>
      </div>
    );
  }
}


// Do prop validation here using the package `prop-types`

export default GroceryList;
