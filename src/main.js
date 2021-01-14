import { createTodo, getAllTodos, editTodo, getTodoDetail } from './apis/todosApis'

function onEditTodo (todo) {
    todoDetailWrapper.innerHTML = `
      <div>
        <span>id: ${todo.id}</span>
        <span>name: ${todo.name}</span>
        <span>description: ${todo.description}</span>
        <span>start_at: ${todo.start_at}</span>
        <span>end_at: ${todo.end_at}</span>
        <span>avatar: ${todo.avatar}</span>
      </div>`
}

const wrapper = document.getElementById('app')
const todoDetailWrapper = document.getElementById('todo-detail')

const renderTodos = (data) => {
    if(data) {
        data.forEach(todo => {
            const todoRender =
            `<div class="todo-wrapper">
              <span>id: ${ todo.id }</span>  
              <span>name: ${ todo.name }</span>  
              <span>description: ${ todo.description }</span>  
              <span>start at: ${ todo.start_time }</span>  
              <span>end at: ${ todo.end_time }</span>  
              <button class="edit-btn">Edit</button>
            </div>`
            wrapper.innerHTML += todoRender
        })
        return wrapper
    }
}


window.onload = async () => {
    const data = await getAllTodos();
    renderTodos(data)
    const buttons = document.querySelectorAll('.edit-btn')
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => onEditTodo(data[index]))
    })
    // const buttons = document.querySelectorAll('.edit-btn')
    // buttons.forEach(button => {
    //     button.addEventListener('click', onEditTodo)
    // })

    // var form1 = document.getElementById('form1');
    // var form2 = document.getElementById('form2');
    // var form3 = document.getElementById('form3');
    //
    // var next1 = document.getElementById('Next1');
    // var next2 = document.getElementById('Next2');
    // var back1 = document.getElementById('Back1');
    // var back2 = document.getElementById('Back2');
    // var progress = document.getElementById('progress');

    // next1.onclick = function () {
    //     form1.style.left = "-450px";
    //     form2.style.left = "40px";
    //     progress.style.width = "240px";
    // }
    // back1.onclick = function () {
    //     form1.style.left = "40px";
    //     form2.style.left = "450px";
    //     progress.style.width = "120px";
    // }
    //
    // next2.onclick = function () {
    //     form2.style.left = "-450px";
    //     form3.style.left = "40px";
    //     progress.style.width = "360px";
    // }
    // back2.onclick = function () {
    //     form2.style.left = "40px";
    //     form3.style.left = "450px";
    //     progress.style.width = "240px";
    // }
}

