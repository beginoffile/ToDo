import { ToDo } from "./todo.class";
import { todoList } from "../index";

export class ToDoList{
    constructor(){
        //this.toDoList = [];
        this.cargarLocalStorage();
    }
    nuevoToDo(toDo){
        this.toDoList.push(toDo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.toDoList = this.toDoList.filter( toDo => toDo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for ( const toDo of this.toDoList){
            if (toDo.id == id){
                toDo.completado = !toDo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.toDoList = this.toDoList.filter( toDo => !toDo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.toDoList));
    }

    cargarLocalStorage(){

        // if (localStorage.getItem('todo')){
        //     console.log(JSON.parse(localStorage.getItem('todo')));
        //     this.toDoList = JSON.parse(localStorage.getItem('todo'));
        // }else{
        //     this.toDoList = [];
        // }


        this.toDoList = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo')) 
            : [];
            
        //this.toDoList = this.toDoList.map(obj => ToDo.fromJSon(obj));
        this.toDoList = this.toDoList.map(ToDo.fromJSon);

        //console.log(this.toDoList);
    }
}