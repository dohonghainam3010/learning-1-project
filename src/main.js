const getAllTodos = () => {
    return new Promise(res => {
        fetch('https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/')
            .then((response) => response.json())
            .then((json) => {
                res(json)
            });
    })
}

const getTodoDetail = (todoId) => {
    return new Promise(res => {
        fetch(`https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/${todoId}`)
            .then((response) => response.json())
            .then(json => res(json))
    })
}

const editTodo = (data) => {
    return new Promise(res => {
        fetch('https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(json => res(json))
            .then(() => getAllTodos())
    })
}

const createTodo = (data) => {
    return new Promise(res => {
        fetch('https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/', {
          method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(json => res(json))
            .then(() => getAllTodos())
    })
}

const renderTodos = (data) => {
    const wrapper = document.getElementById('app')
    if(data) {
        data.forEach(todo => {
            const todoRender =
            `<div class="todo-wrapper">
              <span>id: ${ todo.id }</span>  
              <span>name: ${ todo.name }</span>  
              <span>description: ${ todo.description }</span>  
              <span>start at: ${ todo.start_time }</span>  
              <span>end at: ${ todo.end_time }</span>  
            </div>`
            wrapper.innerHTML += todoRender
        })
    }
}

window.onload = async () => {
    const data = await getAllTodos();
    renderTodos(data)

    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    var form3 = document.getElementById('form3');

    var next1 = document.getElementById('Next1');
    var next2 = document.getElementById('Next2');
    var back1 = document.getElementById('Back1');
    var back2 = document.getElementById('Back2');
    var progress = document.getElementById('progress');

    next1.onclick = function () {
        form1.style.left = "-450px";
        form2.style.left = "40px";
        progress.style.width = "240px";
    }
    back1.onclick = function () {
        form1.style.left = "40px";
        form2.style.left = "450px";
        progress.style.width = "120px";
    }

    next2.onclick = function () {
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progress.style.width = "360px";
    }
    back2.onclick = function () {
        form2.style.left = "40px";
        form3.style.left = "450px";
        progress.style.width = "240px";
    }
}

