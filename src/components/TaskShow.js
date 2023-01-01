import { useState } from 'react';
import TaskEdit from './TaskEdit';
import '../app.css';

function TaskShow({ task, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };


  let content = <div><h3>{task.title}</h3> <h5>({task.category})</h5></div>;
  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={task} />;
  }

  return (
    <div className="task-show" >
      <div className='task-class' >{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default TaskShow;
