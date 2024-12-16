import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'compose todo app', isCompleted: false },
    { id: 2, text: 'have lunch', isCompleted: false },
  ])

  const addTodo = (inputValue) => {
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => id !== todo.id))
  }

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const deleteCompletedTodos = () => {
    setTodoList(todoList.filter((todo) => !todo.isCompleted))
  }

  const resetTodos = () => setTodoList([])

  const completedTasksCounter = todoList.filter(
    (todo) => todo.isCompleted
  ).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {!!todoList.length && (
        <TodosActions
          deleteCompletedTodos={deleteCompletedTodos}
          resetTodos={resetTodos}
          completedTasksExist={!!completedTasksCounter}
        />
      )}
      {!todoList.length && <h2>Todo List is empty</h2>}
      <TodoList
        deleteTodo={deleteTodo}
        todoList={todoList}
        toggleTodo={toggleTodo}
      />
      {!!completedTasksCounter && (
        <h2>{`You have completed ${completedTasksCounter} ${
          completedTasksCounter > 1 ? `todos` : `todo`
        }`}</h2>
      )}
    </div>
  )
}

export default App
