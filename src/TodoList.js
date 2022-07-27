import { bindActionCreators } from "redux"
import * as todoActions from './actions/todos'
import { connect } from "react-redux"
import { Component } from "react"

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
          <li>Item do todo</li>
        </ul>

        <input
          type='text'
          placeholder="digite algo"
          value={this.state.newTodoText}
          onChange={(e) => this.setState({ newTodoText: e.target.value})}
        ></input>
        <button onClick={this.addNewTodo}>Novo todo</button>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch)

export default connect(null, mapDispatchToProps)(TodoList)