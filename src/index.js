import './styles.css';

import {ToDo, ToDoList} from './classes';
import { crearTodoHtml } from './js/components';
// import { ToDo } from "./classes/todo.class.js";
// import { ToDoList } from "./classes/todo-list.class.js";

export const todoList = new ToDoList();

//todoList.toDoList.forEach( todo => crearTodoHtml(todo) );
todoList.toDoList.forEach( crearTodoHtml );

// const tarea = new ToDo('Aprendiendo a ahorrar');


// todoList.nuevoToDo(tarea);

// console.log(todoList);

// crearTodoHtml( tarea );

