import { useState } from 'react';

function TaskCreate({ action,task, onCreate, onEdit }) {
  const [values, setValues] = useState({})
  const handleChange = (e) => setValues((prevValues) =>({...prevValues, [e.target.name]: e.target.value}));
  const options = ['groceries','Home tasks','Work tasks','kids']
  
  let inputText = action==='edit'? task.title:'';
  let textTilte= action==='edit'? 'Edit':'Add task';
  let textBtn= action==='edit'? 'Save':'Add'
  let inputType = <input  name={'taskInt'} defaultValue={inputText}  onChange={handleChange} />
  
  const handleSubmit = (e) => { e.preventDefault();
    if(values.taskInt.length > 2 && values.category!==''){
      action==='create'? onCreate( values.taskInt, values.category) : onEdit(task.id,values.taskInt ,values.category)
      e.target.reset()}};
      
  return (
    <div >
      <h3>{textTilte}</h3>
      <form onSubmit={handleSubmit}>
        <label >Task</label>
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


