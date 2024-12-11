import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'compose todo app' },
    { id: 2, text: 'have lunch' },
  ])

  const addTodo = (inputValue) => {
    const newTodo = { id: Date.now(), text: inputValue }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => id !== todo.id))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {!todoList.length && <h2>Todo List is empty</h2>}
      <TodoList deleteTodo={deleteTodo} todoList={todoList} />
    </div>
  )
}

export default App
