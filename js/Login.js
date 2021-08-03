const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-input")
const loginSubmit = document.querySelector("#login-submit")
const hide = document.querySelector(".hide")
const hello = document.querySelector("#hello")
const savedName = localStorage.getItem("name")
const loginName = document.querySelector("#name")
const editBtn = document.querySelector("#edit-button")
const todoInput2 = document.querySelector("#todo-form input")

if (localStorage.key("name")) {
    todoInput2.focus()
}

function handleName(self) {
    loginForm.classList.add("hide")
    editBtn.classList.remove("hide")
    loginName.classList.remove("hide")
    hello.innerText = `hello ${self}`
}

if (savedName) {
    handleName(savedName)
} else {
    handleEditBtn()
}

function handleLogin(event) {
    event.preventDefault()
    const name = loginInput.value
    localStorage.setItem("name", name)
    const newName = localStorage.getItem("name")
    handleName(newName)
    if (localStorage.key("name")) {
        todoInput2.focus()
    }
}

function handleEditBtn(event) {
    loginForm.classList.remove("hide")
    editBtn.classList.add("hide")
    loginName.classList.add("hide")
    loginInput.value = localStorage.getItem("name")
    localStorage.removeItem("name")
    loginInput.select()
}

loginForm.addEventListener("submit", handleLogin)
editBtn.addEventListener("click", handleEditBtn)