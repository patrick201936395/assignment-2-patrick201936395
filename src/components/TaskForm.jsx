import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!text.trim()) return
    onAddTask(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task">New task</label>
      <div className="task-form-controls">
        <input id="new-task" type="text" value={text} onChange={event => setText(event.target.value)} placeholder="Enter a task" />
        <button type="submit">Add task</button>
      </div>
    </form>
  )
}

export default TaskForm
