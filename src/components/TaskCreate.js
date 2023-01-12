import { useState } from 'react';

function TaskCreate({ action,task, onCreate, onEdit }) {
  const [values, setValues] = useState({})
  const handleChange = (e) => setValues((prevValues) =>({...prevValues, [e.target.name]: e.target.value}));
  const options = ['groceries','Home tasks','Work tasks','kids']
  
  let inputText = action==='edit'? task.title:'';
  let textTilte= action==='edit'? 'Edit':'Add task';
  let textBtn= action==='edit'? 'Save':'Add'
  let inputType = <textarea  name={'taskInt'} defaultValue={inputText}  onChange={handleChange}  />
  let style = action==='create'? 'task-create':'task-edit';

  const handleLongText = longText => longText.match(/.{1,17}/g).join("\n") 


  const handleSubmit = (e) => { e.preventDefault();
      let taskText = values.taskInt ?? task.title
      let taskCategory = values.category ?? task.category 
      taskText = taskText.length> 16 ? handleLongText(taskText) : taskText
    if(taskText.length > 2 &&taskCategory!==''){
      action==='create'? onCreate( taskText, taskCategory) : onEdit(task.id, taskText, taskCategory)
      e.target.reset()
    }
    };
      
  return (
    <div className={style} >
      <h3>{textTilte}</h3>
      <form onSubmit={handleSubmit}>
        <label >Task: </label>
          {inputType}
        <select defaultValue={""} name={'category'} onChange={handleChange}>
          <option disabled value="">Choose category</option>
          {options.map((optn)=><option key={optn} value={optn}>{optn}</option>)}
        </select>
        <button>{textBtn}</button>
      </form>
    </div>
  );
}

export default TaskCreate;


