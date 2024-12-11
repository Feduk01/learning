import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'
function Todo({ deleteTodo, todo }) {
  const { id, text } = todo
  return (
    <div className={styles.TodoContainer} onDoubleClick={() => deleteTodo(id)}>
      <RiTodoFill className={styles.todoIcon} />
      <h4 className={styles.todoText}>{text}</h4>
    </div>
  )
}

export default Todo
