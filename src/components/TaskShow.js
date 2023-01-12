import { useState } from 'react';
import TaskCreate from './TaskCreate';

function TaskShow({ task, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [textToShow, setTextToShow] = useState(task.title.slice(1,60));
  const handleDeleteClick = () => onDelete(task.id);
  const handleEditClick = () => setShowEdit(!showEdit);
  const handleSubmit = (id, newTitle, newCategory) => {
    onEdit(id, newTitle,newCategory );
   setShowEdit((prev)=>!prev);
 };
 
  const handleExpand = () =>{
    console.log(expanded);
    !expanded? setTextToShow((prev) => task.title) : setTextToShow(task.title.slice(1,60))
    setExpanded((prev)=> !prev)

  };

  let expandBtn = ''
  let expandOrMinimize = "expand"
  if(textToShow.length > 40){expandBtn = <button onClick={handleExpand}>{expandOrMinimize}</button> } 
  let content = <><h3 >{textToShow}</h3>  {expandBtn} <h5>({task.category})</h5></>;
  if (showEdit) content = <TaskCreate action={'edit'} onEdit={handleSubmit} task={task} />

  return (
    <div className="task-show" >
      <div >{content}</div>
      <div>
        <button className="edit-btn"  onClick={handleEditClick}>edit</button>
        <button className="delete-btn" onClick={handleDeleteClick}>X</button>
      </div>
    </div>
  );
}

export default TaskShow;
