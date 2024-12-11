import Todo from './Todo'
import styles from './TodoList.module.css'
function TodoList({ todoList, deleteTodo }) {
  return (
    <section className={styles.todoListContainer}>
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} />
      ))}
    </section>
  )
}

export default TodoList
