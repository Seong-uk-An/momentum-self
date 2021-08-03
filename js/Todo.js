const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")
const getTodos = localStorage.getItem("todos")

const TODOS_KEY = "todos"

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
    const li = event.target.parentNode
    li.remove()
    todos = (todos.filter((item) => item.id !== parseInt(li.id)))
    saveTodos()
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li")
    li.id = newTodoObj.id
    const span = document.createElement("span")
    const editTodo = document.createElement("button")
    const button = document.createElement("button")
    li.classList.add("todo-list")
    span.classList.add("todo-span")
    span.innerText = newTodoObj.text
    editTodo.classList.add("edit-todo")
    editTodo.innerText = "✎"
    button.classList.add("delete-button")
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    // li.appendChild(editTodo)
    li.appendChild(button)
    todoList.appendChild(li)
}

function handleTodo(event) {
    event.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

todoForm.addEventListener("submit", handleTodo)



const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos)
    todos = parsedTodos
    parsedTodos.forEach(paintTodo)
}