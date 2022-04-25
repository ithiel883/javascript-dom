import "../assets/css/style.css";

const app = document.getElementById("app");

app.innerHTML = `
<div class="todos">
<div class="todos-header">
<h3 class="todos-title">Todo List</h3>
<div>
<p>You have <span class="todos-count"></span> Items  </p>
<button type"button" class="todos-clear" style="display: none;">
Clear completed
</button>
</div>
</div>
<form class="todos-form" name="todos">
<input type="text" placeholder="what's next ?" name="todo" />
</form>
<ul class="todos-list">
</ul>
</div>


`;
//state 
let todos = []


//selectors
const root = document.querySelector('.todos')
const list = root.querySelector('.todos-list')
const form = document.forms.todos
const input = form.elements.todo

//functions
function renderTodos(todos) {
//<li>

let todoString = ''
todos.forEach((todo, index) => {
    todoString += `
    <li data-id="${index}"${todo.complete ? ' class="todos-complete"' : '' }>
    <input type="checkbox"${todo.complete ? ' checked' : ''}>
    <span> ${todo.label}</span>
    <button type="button"></button>
    </li>
    `
})
list.innerHTML = todoString

}

function addTodo(event){
    event.preventDefault();
    const label = input.value.trim();
    const complete = false;
    todos = [
        ...todos,
         {
            label,
            complete
        }
    ]
    renderTodos(todos)
    input.value = ''

}

function updateTodo(event) {
    const id = parseInt(event.target.parentNode.getAttribute('data-id'), 10)
    const complete = event.target.checked;
    todos = todos.map((todo, index) => {
        if(index === id) {
            return {
                ...todo,
                complete
            }
        }
        return todo
    })
    renderTodos(todos)
}

//init
function init() {
//Add todo
form.addEventListener('submit', addTodo)
//update the todo
list.addEventListener('change', updateTodo)
}
init()






