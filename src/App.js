import { useState } from 'react';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, category) => setTasks((prevTasks)=>[...tasks,{id: new Date().getTime(),title,category}]);
  const deleteTaskById = (id) => setTasks((prevTasks)=> tasks.filter((task) => task.id !== id));
  const editTaskById = (id, newTitle, newCategory) => {
  setTasks((prevTasks) => prevTasks.map((task) => (task.id === id) ? { ...task, title: newTitle, category: newCategory } : task ));}
  
  return (
    <div className="app">
      <h1>To do List</h1>
      <TaskList  onEdit={editTaskById} tasks={tasks} onDelete={deleteTaskById} />
      <TaskCreate onCreate={createTask} action={'create'} />
    </div>
  );
}
export default App;

