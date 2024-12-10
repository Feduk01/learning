import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/Todolist'

function App() {
  const [todoList, setTodolist] = useState([
    { title: 'Workout', id: 1234567 },
    { title: 'Study', id: 654321 },
  ])

  function addTodo(userInput) {
    const newTodo = { title: userInput, id: Date.now() }
    setTodolist((todoList) => [...todoList, newTodo])
  }

  function deleteTodo(id) {
    setTodolist((todoList) => todoList.filter((todo) => id !== todo.id))
  }

  return (
    <div className="app-container">
      <main className="todo-container">
        <TodoForm addFunc={addTodo} />
        <TodoList todos={todoList} deleteFunc={deleteTodo} />
      </main>
    </div>
  )
}

export default App
