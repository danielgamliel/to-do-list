import { useState } from 'react';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const editTaskById = (id, newTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  };

  const createTask = (title, category) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999),
        title,
        category
      },
    ];
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>To do List</h1>
      <TaskList onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
      <TaskCreate onCreate={createTask} />
    </div>
  );
}

export default App;
