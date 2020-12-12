import "../css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';

import TodoList from "./TodoList";
import TodoListInject from "./TodoListInject";
import store from "./TodoStore";

const app = document.getElementById("app");

ReactDOM.render(
    // <TodoList store={store} />
    <>
        <Provider store={store}>
            {/* <TodoList store={store} /> */}
            <TodoListInject /> 
        </Provider>
    </>
,app);