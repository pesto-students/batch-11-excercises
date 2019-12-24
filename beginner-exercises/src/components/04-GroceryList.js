import React from 'react';
import PropTypes from 'prop-types';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
    };
    this.addGrocery = this.addGrocery.bind(this);
  }

  addGrocery(event) {
    event.preventDefault();
    this.setState(prevState => [...prevState.groceries, { name: this.grocery.value }]);
  };

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem grocery={item} />
    ));
    return (
      <React.Fragment>
        <ul> {groceriesComponents} </ul>
        <form>
          <label form="grocery"> Grocery: </label>
          <input type="text" name="grocery" id="grocery" ref={input => this.grocery = input}/>
          <button type="submit" onClick={this.addGrocery}> Add </button>
        </form>
      </React.Fragment>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.object,
};


export default GroceryList;
