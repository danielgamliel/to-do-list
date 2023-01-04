// import { useState } from 'react';

// function TaskEdit({ task, onSubmit }) {
//   const [title, setTitle] = useState(task.title);
  
//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     onSubmit(task.id, title);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="task-edit">
//       <label>Title</label>
//       <input className="input" value={title} onChange={handleChange} />
//       <button className="button is-primary">Save</button>
//     </form>
//   );
// }

// export default TaskEdit;
