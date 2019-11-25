/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-alert */
const openRequest = indexedDB.open("todo-Store", 1);
openRequest.onsuccess = function() {
  const db = openRequest.result;
  if (!db.objectStoreNames.contains("todos")) {
    db.createObjectStore("todos", { keyPath: "id" });
  }
};

function addTodo() {
  const db = openRequest.result;
  const transaction = db.transaction("todos", "readwrite");
  const todos = transaction.objectStore("todos");
  const todoContent = document.querySelector("#todo").value;
  const todo = {
    created: new Date(),
    completed: false,
    task: todoContent
  };

  const request = todos.add(todo);
  request.onsuccess = function() {
    console.log("Todo Added");
  };

  request.onerror = function() {
    console.log("Error", request.error);
  };
}
