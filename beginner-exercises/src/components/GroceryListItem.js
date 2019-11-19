// eslint-disable-next-line import/no-unresolved
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.listItemClicked = this.listItemClicked.bind(this);
  }

  listItemClicked() {
    const { selected } = this.state;
    this.setState({ selected });
  }

  render() {
    const { selected } = this.state;
    const className = selected ? 'selected-grocery-listItem' : 'unselected-grocery-listItem';
    const { grocery } = this.props;
    return (
      <li>
        <div
          tabIndex="0"
          role="button"
          className={className}
          onClick={this.listItemClicked}
          onKeyPress={this.listItemClicked}
        >
          { grocery.name }
        </div>
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  grocery: PropTypes.object.isRequired,
};

export default GroceryListItem;
