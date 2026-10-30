import { useState } from 'react'
import TaskList from './components/TaskList.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskCounter from './components/TaskCounter.jsx'
import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Call Mom', completed: false },
    { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, text: 'Return the textbook to Josie', completed: false },
    { id: 4, text: 'Buy the new album by Rake', completed: false },
    { id: 5, text: 'Buy a gift card for Dad', completed: false },
  ])
  const [filter, setFilter] = useState('All')

  function handleAddTask(text) {
    const trimmedText = text.trim()
    if (!trimmedText) return
    setTasks(previousTasks => [
      ...previousTasks,
      { id: crypto.randomUUID(), text: trimmedText, completed: false },
    ])
  }

  function handleToggleTask(id) {
    setTasks(previousTasks => previousTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  function handleDeleteTask(id) {
    setTasks(previousTasks => previousTasks.filter(task => task.id !== id))
  }

  const completedCount = tasks.filter(task => task.completed).length
  const visibleTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
    return true
  })

  return (
    <div className="app">
      <header className="main-header">
        <span className="menu-button"><img src={menuIcon} alt="" /></span>
        <div className="quick-find">
          <img src={searchIcon} alt="" />
          <span>Quick find</span>
        </div>
        <TaskCounter total={tasks.length} completed={completedCount} />
      </header>
      <div className="page-layout">
        <nav className="sidebar" aria-label="Task categories">
          <ul>
            <li>
              <a className="active" href="#inbox" aria-current="page">
                <img src={inboxIcon} alt="" />
                <strong>Inbox</strong>
                <span className="task-count">{tasks.length}</span>
              </a>
            </li>
            <li><span className="nav-label"><img src={calendarIcon} alt="" />Today</span></li>
            <li><span className="nav-label"><img src={upcomingIcon} alt="" />Upcoming</span></li>
          </ul>
        </nav>
        <main className="main-content" id="inbox">
          <h1>Inbox</h1>
          <div className="filters" role="group" aria-label="Filter tasks">
            {['All', 'Active', 'Completed'].map(option => (
              <button
                key={option}
                type="button"
                className={filter === option ? 'selected' : ''}
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <TaskList tasks={visibleTasks} onToggleTask={handleToggleTask} onDeleteTask={handleDeleteTask} />
          <TaskForm onAddTask={handleAddTask} />
        </main>
      </div>
    </div>
  )
}

export default App
