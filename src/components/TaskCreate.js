import { useState } from 'react';

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const [category, setCategory ] = useState('')

  const handleCategory = (event)=>{setCategory(event.target.value)}
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(title.length);
    console.log(category);
    if(title.length>2 && category!==''){
      event.preventDefault();
    onCreate(title, category);
    setTitle('');
  }
  event.preventDefault();  
  };

  return (
    <div className="task-create">
      <h3>Add a Task</h3>
      <form onSubmit={handleSubmit}>
        <label>Task</label>
        <input className="input" value={title} onChange={handleChange} />
        <select defaultValue={category}
                onChange={handleCategory}>
                <option disabled  value="">Choose category</option>
                <option value="groceries">groceries</option>
                <option value="Home tasks">Home tasks</option>
                <option value="Work tasks">Work tasks</option>
                <option value="kids">kids</option>
            </select>
        <button className="button">Add</button>
      </form>
    </div>
  );
}

export default TaskCreate;
