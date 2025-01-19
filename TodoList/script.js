const todoInput = document.getElementById("input");
const todoSubmit = document.getElementById("submit");
const todoList = document.getElementById("todo-list");

function addTodo(todo) {
  const div = document.createElement("div");
  div.classList.add("list-item");
  todoList.appendChild(div);

  const span = document.createElement("span");
  span.innerText = todo;
  div.appendChild(span);
  todoInput.value = "";

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("list-item-complete");
  completeBtn.innerText = "Complete";
  div.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("list-item-delete");
  deleteBtn.innerText = "Delete";
  div.appendChild(deleteBtn);

  todoInput.value = "";
  todoInput.focus();
}

todoSubmit.addEventListener("click", () => {
  const value = todoInput.value;
  if (!value) return;
  addTodo(value);
});

todoList.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("list-item-complete")) {
    target.previousElementSibling.classList.toggle("completed");
  } else if (target.classList.contains("list-item-delete")) {
    target.parentElement.remove();
  }
});
