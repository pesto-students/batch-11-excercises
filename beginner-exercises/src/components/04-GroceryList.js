import React from "react";

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: "Apples" }, { name: "KitKat" }, { name: "Red Bull" }],
      inputVal: null
    };
    this.valueChange = this.valueChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.clearItem = this.clearItem.bind(this);
  }

  valueChange(event) {
    this.setState({ inputVal: event.target.value });
  }

  addItem() {
    const { groceries, inputVal } = this.state;
    groceries.push({ name: inputVal });
    this.setState({
      groceries
    });
  }

  clearItem() {
    this.setState({ groceries: [] });
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => (
      // eslint-disable-next-line react/jsx-filename-extension
      <GroceryListItem grocery={item} />
    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <input
          type="text"
          id="itemname"
          name="items"
          onChange={this.valueChange}
        />
        <input
          type="button"
          id="additem"
          value="Add Item"
          onClick={this.addItem}
        />
        <input
          type="button"
          id="clearitem"
          value="Clear Item"
          onClick={this.clearItem}
        />
      </div>
    );
  }
}

class GroceryListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: "black"
    };

    this.setColor = this.setColor.bind(this);
  }

  setColor() {
    const newColor = this.state.color === "black" ? "red" : "black";
    this.setState({ color: newColor });
  }

  render() {
    return (
      <li style={{ color: this.state.color }} onClick={this.setColor}>
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
