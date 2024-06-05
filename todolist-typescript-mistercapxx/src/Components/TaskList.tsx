import TaskItem from "./TaskItem";
import { Task,TaskListProps } from "../types";
import React, { useEffect, useState } from 'react';


const TaskList:React.FC<TaskListProps> = ({initTasks}) => {

    const [tasks,setTasks] = useState<Task[]> (initTasks || []);


    useEffect(() => {
      if (!initTasks) {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
          setTasks(JSON.parse(savedTasks));
        }
      }
    }, [initTasks]);

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    return (
      <div>
          <h1>Task List</h1>
          {tasks.length > 0 ? (
              <ul>
                  {tasks.map((task) => (
                      <TaskItem
                          key={task.id}
                          task={task}
                          onRemove={(id) => setTasks(tasks.filter(task => task.id !== id))}
                          onToggle={(id) =>
                              setTasks(
                                  tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
                              )
                          }
                      />
                  ))}
              </ul>
          ) : (
              <p>No tasks to display</p>
          )}
      </div>
  );
};

export default TaskList;

