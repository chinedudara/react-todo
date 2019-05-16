import React, { Component } from 'react'

export class AddTodo extends Component {
state = {
    title: ''
}

onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

onSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({title: ''})
}

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <input 
            type="text" 
            name="title" 
            value={this.state.title}
            placeholder="What would you like to do?"
            onChange={this.onChange} 
            style={{flex: '10'}}
        />
        <input 
            className="btn" 
            type="submit" 
            value="Add"
            style={{flex: '2'}}
        />
      </form>
    )
  }
}

export default AddTodo
