import checkIcon from '../assets/check_icon.png'

function TaskCounter({ total, completed }) {
  return (
    <p className="task-counter" aria-live="polite" aria-label={`${total} total tasks, ${completed} completed`}>
      <img src={checkIcon} alt="" />
      <span>{total} / {completed}</span>
    </p>
  )
}

export default TaskCounter
