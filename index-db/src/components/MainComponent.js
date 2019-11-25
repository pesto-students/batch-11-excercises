import React, { useState, useEffect } from "react"
import { addTODO, getAllTODO } from "../indexDBLib"
const MainComponent = () => {
  const [todoTask, setTodoTask] = useState("")
  const [todoList, setToDoList] = useState([])
  useEffect(() => {
    setTimeout(() => getAllTODO().then(result => setToDoList(result)), 100)
  }, [])
  const handleOnInputChange = event => {
    setTodoTask(event.target.value)
  }
  const handleAddItemButtonClick = () => {
    addTODO(todoTask)
    setTodoTask("")
    getAllTODO().then(result => setToDoList(result))
  }
  return (
    <div>
      <input type="text" onChange={handleOnInputChange} value={todoTask} />
      <button onClick={handleAddItemButtonClick}> Add Item </button>
      {todoList.length === 0 ? (
        <p> No Task Has Been Listed Yet </p>
      ) : (
        <ol>
          {todoList.map(todo => {
            return <li key={todo.id}> {todo.details} </li>
          })}
        </ol>
      )}
    </div>
  )
}
export default MainComponent
