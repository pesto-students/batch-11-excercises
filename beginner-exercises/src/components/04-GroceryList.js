import React from 'react';
import PropTypes from 'prop-types';
class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: 'Apples', purchased: false },
        { name: 'KitKat', purchased: false },
        { name: 'Red Bull', purchased: false },
      ],
      inputValue: '',
    };
    console.log(this);
    this.newGroceryHandler = this.newGroceryHandler.bind(this);
    this.changeHandle = this.changeHandle.bind(this);
    this.clearHandle = this.clearHandle.bind(this);
    this.colorHandle = this.colorHandle.bind(this);
  }
  changeHandle(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  newGroceryHandler(event) {
    const oldGroceries = this.state.groceries;
    const updatedGroceres = [
      ...oldGroceries,
      { name: this.state.inputValue, purchased: false },
    ];
    this.setState({
      groceries: updatedGroceres,
      inputValue: '',
    });
    event.preventDefault();
  }

  clearHandle() {
    this.setState({
      groceries: [],
      inputValue: '',
    });
  }
  colorHandle(index) {
    let groceries = this.state.groceries;
    let findPurchasedGrocery = groceries[index];
    findPurchasedGrocery.purchased = !findPurchasedGrocery.purchased;
    const updatedGroceres = [...groceries];
    console.log(updatedGroceres);
    this.setState({
      groceries: updatedGroceres,
    });
  }
  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, index) => (
      <GroceryListItem
        id={item.name}
        grocery={item}
        colorHandle={() => this.colorHandle(index)}
      />
    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>

        <form onSubmit={this.newGroceryHandler}>
          <label>
            Add Your Grocery :{' '}
            <input
              type='text'
              onChange={this.changeHandle}
              value={this.state.inputValue}
            ></input>
          </label>
          <button type='submit' style={{ margin: '20px' }}>
            Submit
          </button>
        </form>
        <button onClick={this.clearHandle}>Clear the List</button>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  render() {
    return (
      <li
        style={
          this.props.grocery.purchased
            ? { color: 'Red', cursor: 'Pointer' }
            : { color: 'Black', cursor: 'Pointer' }
        }
        onClick={this.props.colorHandle}
      >
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.object,
  onClick: PropTypes.func,
};

export default GroceryList;
