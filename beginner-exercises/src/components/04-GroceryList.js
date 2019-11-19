import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples', addedToCart: false }, { name: 'KitKat',addedToCart: false }, { name: 'Red Bull', addedToCart: false }],
      inputValue: ''
    };
  }
 handleChange = (event) => {
  const value = event.target.value;
  this.setState({inputValue: value});
  }
  onAdd() {
   const addGrocery = [...this.state.groceries, {name: this.state.inputValue,addedToCart: false}];
   this.setState({groceries: addGrocery, inputValue: ''})
   
  }
  addToCart = (index) => {
    const groceriesList = this.state.groceries;
    const checkIfaddedTOcart = groceriesList[index];
    checkIfaddedTOcart.addedToCart = !checkIfaddedTOcart.addedToCart;
    const updateGrocery = [...groceriesList];
    this.setState({
      groceries: updateGrocery,
    });
  }
  clearList = () => {
    this.setState({
      groceries: [],
      inputValue: '',
    });
  }
  render() {
    const { groceries } = this.state;
    const groceriesComponents = <ul>{groceries.map((item, index) => ( // eslint-disable-line no-unused-vars
      <GroceryListItem grocery={item} key={index} addToCart={() => this.addToCart(index)}/>
    ))}</ul>
  
    return (
      <div>
        {groceriesComponents}
        <label> Add Grocery:
        <input type="text" name="name" onChange={ this.handleChange } />
        </label>
          <button className="button" onClick={this.onAdd.bind(this)}>Add</button>
          <button className="button" onClick={this.clearList}>Clear items from list</button>
          
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li style={this.props.grocery.addedToCart ?{color: 'red'} : {color: 'black'} } onClick={this.props.addToCart}>
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.object,
  onClick: PropTypes.func,
}

export default GroceryList;
