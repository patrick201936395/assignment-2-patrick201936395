function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={() => onToggleTask(task.id)} />
        <span>{task.text}</span>
      </label>
      <button type="button" className="delete-button" aria-label={`Delete ${task.text}`} onClick={() => onDeleteTask(task.id)}>
        Delete
      </button>
    </li>
  )
}

export default TaskItem
