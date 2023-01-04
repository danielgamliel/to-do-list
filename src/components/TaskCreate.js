import { useState, useRef } from 'react';


/*
  git status // shows the updated/deleted/created files ready to stage
  git add . // stage all updated/deleted/created files
  git commit -m "your commit msg here" // commit your files and ready to push
  git push // pushes your commit(code) to github
  
*/
function TaskCreate({ action,task, onCreate, onEdit }) {
  
  const [values, setValues ] = useState({})

  const refInt = useRef();
  const refEditInt = useRef();
  const refCat = useRef();
 
  const handleChange = (e) => setValues((prevValues) => ({...prevValues, [e.target.name]: e.target.value}));

  let textTilte='Add task';
  let textBtn='add'
  let theInput= <input ref={refInt} name={'task'}  onChange={handleChange} />
  if(action==='edit'){
       textTilte= 'edit';
       textBtn= 'save';
       theInput=  <input  ref={refEditInt} name={'task'} defaultValue={task.title}  onChange={handleChange} />
  }

  const  handleSubmitEdit = (event)=>{
    event.preventDefault();
    onEdit(task.id,refEditInt.current.value ,refCat.current.value )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const title=  refInt.current.value
    const category = refCat.current.value
    if(title.length > 2 && category!==''){
      onCreate( title, category);
      // event.target.reset();
      setValues({})
      refInt.current.value = ''
      refCat.current.value = ''
    }
  };

  return (
    <div >
      <h3>{textTilte}</h3>
      <form onSubmit={action==='edit'? handleSubmitEdit : handleSubmit}>
        <label >Task</label>
          {theInput}
        <select defaultValue={""} ref={refCat} name={'category'} onChange={handleChange}>
          <option disabled value="">Choose category</option>
          <option value="groceries">groceries</option>
          <option value="Home tasks">Home tasks</option>
          <option value="Work tasks">Work tasks</option>
          <option value="kids">kids</option>
        </select>
        <button type={'submit'}>{textBtn}</button>
      </form>
    </div>
  );
}

export default TaskCreate;

// edit amd 1 compenent
