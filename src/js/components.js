import { ToDo } from "../classes";
import { todoList } from  '../index.js'

// Referencias al Html
const divToDoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltro = document.querySelectorAll('.filtro');

export const crearTodoHtml = (toDo) =>{
    const htmlToDo = `
    <li class="${toDo.completado? 'completed':''}" data-id="${toDo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${toDo.completado? 'checked':''}>
            <label>${ toDo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
    
    /*
    const div = document.createElement('div');
    div.innerHTML = htmlToDo;
    divToDoList.append( div.firstElementChild);
    */
    divToDoList.innerHTML = divToDoList.innerHTML + htmlToDo;

    return htmlToDo;

}

//Eventos

txtInput.addEventListener('keyup', (event)=>{
    if (event.keyCode === 13 && txtInput.value.length>0){
        const nuevoToDo = new ToDo(txtInput.value);
        todoList.nuevoToDo( nuevoToDo );
        crearTodoHtml( nuevoToDo);
        txtInput.value = '';
    }
});

divToDoList.addEventListener('click', (event)=>{
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
  
    if (nombreElemento.includes('input')){ // Click en el checkbox
        todoList.marcarCompletado ( todoId );
        todoElemento.classList.toggle('completed');
    } else if(nombreElemento.includes('button')){
            todoList.eliminarTodo(todoId);
            divToDoList.removeChild(todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();
    for (let i = divToDoList.children.length-1; i>=0; i--){
        const elemento = divToDoList.children[i];
        console.log(elemento);
        if (elemento.classList.contains('completed')){
            divToDoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event)=>{
    const filtro =  event.target.text;

    if (!filtro){ return;}

    anchorFiltro.forEach(elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');

    for (const elemento of divToDoList.children){
        console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro){
            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});