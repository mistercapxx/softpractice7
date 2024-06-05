export interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

  export interface TaskItemProps {
    task: Task;
    onRemove:(id:number) => void;
    onToggle:(id:number) => void;
  }
 export interface TaskListProps { 
    initTasks ?: Task[];
}