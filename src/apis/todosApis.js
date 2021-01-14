export const getAllTodos = () => {
  return new Promise(res => {
    fetch('https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/')
        .then((response) => response.json())
        .then((json) => {
          res(json)
        });
  })
}

export const getTodoDetail = (todoId) => {
  return new Promise(res => {
    fetch(`https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/${todoId}`)
        .then((response) => response.json())
        .then(json => res(json))
  })
}

export const editTodo = (data) => {
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

export const createTodo = (data) => {
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

export const deleteTodo = (todoId) => {
  return new Promise(res => {
    fetch(`https://5ff6f759e7164b0017e19f4b.mockapi.io/todo/v1/todo/${todoId}`, {
      method: 'DELETE',
    })
        .then((response) => response.json())
        .then(json => res(json))
  })
}

