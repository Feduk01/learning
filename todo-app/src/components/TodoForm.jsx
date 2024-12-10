import { useState } from 'react'

function TodoForm({ addFunc }) {
  const [userInput, setUserInput] = useState('')

  function handleUserInput(e) {
    e.preventDefault()
    if (userInput.trim()) {
      addFunc(userInput)
      setUserInput('')
    }
  }

  return (
    <form className="form-container" onSubmit={handleUserInput}>
      <input
        type="text"
        placeholder="New todo"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm
