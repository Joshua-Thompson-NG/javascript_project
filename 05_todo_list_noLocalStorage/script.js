// TO-DO LIST

let todos = []; // In memory, wiped after a page refresh

const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("addBtn");

todoBtn.addEventListener("click",() =>  {
    const text = todoInput.value.trim();

    if (!text) return;

    const newTodo = {
        id:Date.now(),
        text:text
    }

    todos.push(newTodo);
    todoInput.value = "";
    render();
});

function render(){
    // Clear the list
    todoList.innerHTML = "";

    // Rebuild everything from the current array
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span class="text-xl font-bold ">${todo.text}</span>
        <button class="bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer hover:bg-red-600" data-id=${todo.id}>Delete</button>
        `
        todoList.appendChild(li);
    });
}

function deleteTodo(id){
    todos = todos.filter(todo => todo.id !== id);
    render();
}

todoList.addEventListener("click",(e) => {
    if (e.target.classList.contains("bg-red-500")) {
        const id = parseInt(e.target.getAttribute('data-id'));
        deleteTodo(id);
    }
});

todoInput.addEventListener("keydown",(e) => {
    if (e.key === "Enter") {
        todoBtn.click();
    }
})
