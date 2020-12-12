import {
  autorun,
  computed,
  observable
} from "mobx";

class Todo {
  @observable value
  @observable id
  @observable complete  
  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false; // チェックボックスのデフォルト状態
  }
}

class TodoStore {
  @observable todos = [];
  @observable filter = "";
  @computed get filteredTodos() {
    var matchesFilter = new RegExp(this.filter, "i");
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
  }
  createTodo(value) {
    this.todos.push(new Todo(value));
  }
  clearComplete = () => {
    const incompleteTodos = this.todos.filter(todo => !todo.complete);
    // Redux と同様にtodos (state) を変更する時はimmutable を意識して新しいArray オブジェクトを作成して値を変更する
    this.todos.replace(incompleteTodos);
  }
}

// コンソールでデバッグできるようにグローバル領域にインスタンスを保持するように実装
var store = window.store = new TodoStore();

export default store;

// autorunはStateが更新されたタイミングでトリガーする関数
autorun (() => {
  // ES6 のobservable の記法でsetter とgetter が利用されているため、setter による状態変化をリアルタイムに検知することができる
  console.log(store.filter);

  console.log(store.todos[0]);
});