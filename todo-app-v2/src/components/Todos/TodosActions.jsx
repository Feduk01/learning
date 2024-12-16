import Button from '../UI/Button'
import styles from './TodosActions.module.css'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
function TodosActions({
  deleteCompletedTodos,
  resetTodos,
  completedTasksExist,
}) {
  return (
    <div className={styles.container}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTasksExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
