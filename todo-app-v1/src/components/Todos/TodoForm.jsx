import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todoInput.trim()) {
      addTodo(todoInput)
      setTodoInput('')
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
