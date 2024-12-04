import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../features/tasks/tasksSlice';

const TaskForm = ({ existingTask, onClose = () => {} }) => { // Set default empty function for onClose
  const dispatch = useDispatch();
  const [title, setTitle] = useState(existingTask?.title || '');
  const [description, setDescription] = useState(existingTask?.description || '');
  const [dueDate, setDueDate] = useState(existingTask?.dueDate || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, dueDate };
    if (existingTask) {
      dispatch(editTask({ ...task, id: existingTask.id }));
    } else {
      dispatch(addTask(task));
    }
    onClose(); // Call onClose, which defaults to an empty function if not provided
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">{existingTask ? 'Save Changes' : 'Save'}</button>
    </form>
  );
};

export default TaskForm;
