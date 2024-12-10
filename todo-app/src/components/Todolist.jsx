function TodoList({ todos, deleteFunc }) {
  return (
    <ul className="todo-list">
      <h2>Todo</h2>
      {todos.map((todo) => {
        return (
          <li
            className="todo-item"
            key={todo.id}
            onClick={() => deleteFunc(todo.id)}
          >
            {todo.title}
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
