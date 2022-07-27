import { bindActionCreators } from "redux"
import * as todoActions from './actions/todos'
import { connect } from "react-redux"
import React,{ Component } from "react"

class TodoList extends Component {
  state = {
    newTodoText: '',
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText)
    this.setState({newTodoText: ''})
  };

  render() {
    return (
      <>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>

        <input
          type='text'
          placeholder="digite algo"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value})}
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)