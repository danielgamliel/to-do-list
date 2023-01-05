import { useState } from 'react';
import TaskCreate from './TaskCreate';
import '../app.css';

function TaskShow({ task, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => onDelete(task.id);
  const handleEditClick = () => setShowEdit(!showEdit);
  const handleSubmit = (id, newTitle, newCategory) => {
     onEdit(id, newTitle,newCategory );
    setShowEdit((prev)=>!prev);
  };

  let content = <div><h3>{task.title}</h3> <h5>({task.category})</h5></div>;
  if (showEdit) content = <TaskCreate action={'edit'} onEdit={handleSubmit} task={task} />

  return (
    <div className="task-show" >
      <div className='task-class'>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default TaskShow;
