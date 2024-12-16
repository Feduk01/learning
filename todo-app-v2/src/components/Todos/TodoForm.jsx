import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

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
      <Button title="Submit" type="Submit">
        Submit
      </Button>
    </form>
  )
}

export default TodoForm
