import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';

// Note: Don't forget prop validation
class TodoList extends Component {
  state = {
    input: '',
  };
  onInputChange = () => {
    this.setState({ input: 'Buy Groceries' });
  };
  render() {
    const { addTodo, removeTodo } = this.props;
    return (
      <div className="todos--container">
        <h1 className="todos--h1">Todos</h1>
        <input type="text" placeholder="Enter Todo" value={this.state.input} onChange={this.onInputChange} />
        <ul>
          <li onClick={() => removeTodo(0)} />
        </ul>
        <button className="todo--button" onClick={() => addTodo({ text: 'Buy Groceries' })}>Add Todo</button>
      </div>
    );
  }
}

TodoList.propTypes = {
  addTodo: PropTypes.func,
  removeTodo: PropTypes.func,
}.isRequired;

export default TodoList;
