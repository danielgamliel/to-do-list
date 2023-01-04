import TaskShow from './TaskShow';

function TaskList({ tasks, onDelete, onEdit }) {
  if(!tasks) {
    console.log('tasks failed -type is ', typeof tasks)
    return null;
  }
  const renderedTasks = tasks.map((task) => {
    console.log('task in list: ' ,task);
    return (
      <TaskShow onEdit={onEdit} onDelete={onDelete} key={task.id} task={task} />
    );
  });

  return <div className="task-list">{renderedTasks}</div>;
}

export default TaskList;
