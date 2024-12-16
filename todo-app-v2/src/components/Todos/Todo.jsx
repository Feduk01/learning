import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'
function Todo({ deleteTodo, todo, toggleTodo }) {
  const { id, text, isCompleted } = todo
  return (
    <div
      className={`${styles.TodoContainer} ${
        isCompleted && styles.completedTodo
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <h4 className={styles.todoText}>{text}</h4>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(id)} />
    </div>
  )
}

export default Todo
