import React from 'react';
import { Task, TaskItemProps } from '../types'


const TaskItem:React.FC<TaskItemProps> = ({task, onRemove, onToggle }) => {
  const handleRemove = () => {
    onRemove(task.id);
  };

  const handleToggle = () => {
    onToggle(task.id);
  };
  return (
    <li>
      <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        {task.text}
      </label>
      <button onClick={handleRemove}>Delete</button>
    </li>
  );
};

export default TaskItem;