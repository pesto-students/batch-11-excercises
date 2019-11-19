import React from "react";
import PropTypes from "prop-types";

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: "Apples" }, { name: "KitKat" }, { name: "Red Bull" }],
      inputValue: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onAddGrocery = this.onAddGrocery.bind(this);
    this.onClearGrocery = this.onClearGrocery.bind(this);
  }

  onClearGrocery() {
    this.setState({ groceries: [] });
  }

  onAddGrocery() {
    const { groceries, inputValue } = this.state;
    groceries.push({ name: inputValue });
    this.setState({ groceries });
  }

  onValueChange(event) {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, index) => (
      <GroceryListItem grocery={item} index={index} />
    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <label htmlFor="addGroceryItem">Enter grocery item: </label>
        <input
          type="text"
          id="addGroceryItem"
          name="addGroceryItem"
          onChange={this.onValueChange}
        ></input>
        <button type="button" name="addGrocery" onClick={this.onAddGrocery}>
          Add Item
        </button>
        <button type="button" name="clear" onClick={this.onClearGrocery}>
          Clear Items
        </button>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleColor: false
    };
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(event) {
    const { toggleColor } = this.state;
    if (!toggleColor) {
      event.target.style.color = "red";
    } else {
      event.target.style.color = "black";
    }
    this.setState({
      toggleColor: !toggleColor
    });
  }

  render() {
    return (
      <li key={this.props.index} onClick={this.onClickItem}>
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  index: PropTypes.number,
  grocery: PropTypes.object
};

export default GroceryList;
