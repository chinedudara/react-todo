import React, { Component } from 'react'
import TodoItem from './TodoItem'
import propTypes from 'prop-types';

export class Todos extends Component {
  render() {
      const todos = this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} checked={this.props.checked} deleteTodo={this.props.deleteTodo} />)
    return (
      <div>
        {todos}
      </div>
    )
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired
}

export default Todos
