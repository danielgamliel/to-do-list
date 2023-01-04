import { useState } from 'react';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const editTaskById = (id, newTitle, newCategory) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id) ? { ...task, title: newTitle, category: newCategory } : task ));
  }

  const deleteTaskById = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks((prevTasks)=> updatedTasks);
  };

  const createTask = (title, category) => {
    const updatedTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title,
        category
      },
    ];
    setTasks((prevTasks)=> updatedTasks);
    
  };

  return (
    <div className="app">
      <h1>To do List</h1>
      <TaskList  onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
      <TaskCreate onCreate={createTask} onSubmitEdit={editTaskById} />
    </div>
  );
}

export default App;


//setState with prev
//ID -time stamp
// component for edit and create with validation
// uncontrolled inputs useRef
