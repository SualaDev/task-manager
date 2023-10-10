import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Life Appointment",
      day: "Feb 7th at 2:50pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30am",
      reminder: false,
    }
  ]
)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?{ ...task, reminder: !task.reminder}: task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? ( 
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}  />
        ) : (
          'No Tasks Found'
        )}
    </div>
  );
}

export default App;
