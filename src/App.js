import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import About from './components/pages/About';

class App extends React.Component {

state = {
  todos: [] 
}

// **Using JSON Placeholder dummy API** //
componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=8')
  .then(res => this.setState({todos: res.data}))
}

checked = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  })})
}

deleteTodo = (id) => {
  // ** For Local test** //
  // this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})

  // **Using JSON Placeholder dummy API** //
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}))
}

addTodo = (title) => {
  if (!title) return

  // ** For Local test** //
  // const newId = Math.max(...[...this.state.todos].map(todo => todo.id))+1
  // const newId = this.state.todos.length ? this.state.todos[this.state.todos.length - 1].id + 1 : 1
  // const newTodo = {
  //   id: newId,
  //   title,
  //   completed: false
  // }
  // this.setState({todos: [...this.state.todos, newTodo]})

  // **Using JSON Placeholder dummy API** //
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
  .then(res => this.setState({todos: [...this.state.todos, res.data]}))
}

  render(){
    return (
        <Router >
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos todos={this.state.todos} checked={this.checked} deleteTodo={this.deleteTodo} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
