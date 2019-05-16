import React, { Component } from 'react'
import propTypes from 'prop-types'

export class TodoItem extends Component {

  todoStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      padding: '10px',
      borderBottom: '1px dashed #000',
      backgroundColor: '#f4f4f4'
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;
    return (
      <div style={this.todoStyle()}>
      <span>
        <input type="checkbox" checked={completed ? true : false} onChange={() => this.props.checked(id)}/>
        {title}
        <button onClick={() => this.props.deleteTodo(id)} style={btnStyle}>X</button>
      </span>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
