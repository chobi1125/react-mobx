import React from "react";
import { observer } from "mobx-react";

// observerデコレーター追加することでrenderメソッド内からstoreへアクセスが可能に。
@observer
export default class TodoList extends React.Component {
  createNew(e) {
    if (e.which === 13) {
      this.props.store.createTodo(e.target.value);
      e.target.value = "";
    }
  }
  filter(e) {
    this.props.store.filter = e.target.value;
  }
  toggleComplete(todo) {
    todo.complete = !todo.complete;
  }
  render() {
    const { clearComplete, filter, filteredTodos, todos } = this.props.store;
    const todoList = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />{todo.value}
      </li>
    ));
    return (
      <div>
        <h1>todos</h1>
        {/* <div>{filter}</div> */}
        <>
          <p>新規追加</p>
          <input class="create" onKeyPress={this.createNew.bind(this)} />
        </>
        <>
          <p>フィルター</p>
          <input class="filter" value={filter} onChange={this.filter.bind(this)} />
        </>
        {/* render配下で定義しているtodoList関数をulタグ配下で呼び出し */}
        <ul>{todoList}</ul>
        <a href="#" onClick={clearComplete}>Clear Complete</a>
      </div>
    )};
}