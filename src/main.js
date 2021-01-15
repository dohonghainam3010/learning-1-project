import { createTodo, getAllTodos, editTodo, getTodoDetail, deleteTodo } from './apis/todosApis'

let data = []

function onEditTodo (todo) {
    todoDetailWrapper.innerHTML = `
      <div>
        <form id="edit-todo">
            <label for="name">Todo name:</label>
            <input type="text" name="name" value="${todo.name}"/>
            <label for="description">Todo description:</label>
            <input type="text" name="description" value="${todo.description}"/>
            <label for="start_time">Start At:</label>
            <input type="date" name="start_time" value="${todo.start_time}"/>
            <label for="end_time">End At:</label>
            <input type="date" name="end_time" value="${todo.end_time}"/>
            <label for="avatar">Avatar:</label>
            <input type="text" name="avatar" value="${todo.avatar}"/>
            <button type="submit">Submit</button>
        </form>
      </div>`
}

async function onDeleteTodo(todo) {
    try {
        await deleteTodo(todo.id)
        data = await getAllTodos()
        renderTodos(data)
        selectTodoActionBtn()
    } catch(e) {
        console.log(e)
    }
}

async function getAllTodo() {
    try {
        data = await getAllTodos()
        renderTodos(data)
        selectTodoActionBtn()
    } catch(e){
        console.log(e)
    }
}

async function onCreateTodo(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries())
    await createTodo(value)
}

function selectTodoActionBtn() {
    const editButtons = document.querySelectorAll('.edit-btn')
    const deleteButtons = document.querySelectorAll('.delete-btn')
    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => onEditTodo(data[index]))
    })

    deleteButtons.forEach((button, index) => {
        button.addEventListener('click', () => onDeleteTodo(data[index]))
    })
}

const todoWrapper = document.getElementById('todo-list')
const todoForm = document.querySelector('#todo-form')
const todoDetailWrapper = document.getElementById('todo-detail')

const renderTodos = (data) => {
    todoWrapper.innerHTML = ''
    if(data) {
        data.forEach(todo => {
            const todoRender =
            `<div class="todo-wrapper">
              <div class="todo-info">
                <span>id: ${ todo.id }</span>    
                <span>name: ${ todo.name }</span>  
                <span>description: ${ todo.description }</span>  
                <span>start at: ${ todo.start_time }</span>  
                <span>end at: ${ todo.end_time }</span>
              </div>
              <div class="todo-action">
                  <button class="edit-btn">Edit</button>
                  <button class="delete-btn">Delete</button>
              </div>
            </div>`
            todoWrapper.innerHTML += todoRender
        })
        return todoWrapper
    }
}


window.onload = async () => {
    await getAllTodo()
    todoForm.addEventListener('submit', (e) => onCreateTodo(e))
}

