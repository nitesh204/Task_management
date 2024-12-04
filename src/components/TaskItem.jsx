import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
      </div>
      <div>
        <button
          className="complete"
          onClick={() => dispatch(toggleTaskCompletion(task.id))}
        >
          {task.completed ? 'Unmark' : 'Complete'}
        </button>
        <button
          className="delete"
          onClick={() => dispatch(deleteTask(task.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
