import { combineReducers, createStore } from 'redux';

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: id,
});

const initialState = {
  todos: [],
};

const handleNewTodo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

const handleRemoveTodo = (state, action) => {
  switch (action.type) {
    case 'REMOVE_TODO': {
      const todosCopy = [...state.todos];
      todosCopy.splice(action.payload, 1);
      return { toods: todosCopy };
    }
    default:
      return state;
  }
};

const currentList = (state = initialState, action) => {
  const handlers = {
    REMOVE_TODO: handleRemoveTodo,
    ADD_TODO: handleNewTodo,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

const rootReducer = combineReducers({
  currentList,
});

export const store = createStore(rootReducer);
