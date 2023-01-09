import TaskShow from './TaskShow';

function TaskList({ tasks, onDelete, onEdit }) {

  return <div className="task-list">{ tasks.map((task) => (<TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />))}</div>;
}

export default TaskList;
