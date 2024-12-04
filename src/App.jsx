import React, { useState } from 'react';
import './index.css'; // Import the CSS file for styling

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([
    { title: 'Project Submission', description: 'Data Structure - 1 hour, Automata Theory - 1 hour', dueDate: '2024-12-04', completed: false },
    { title: 'DSA', description: '3 hours each day', dueDate: '2024-12-03', completed: false },
    { title: 'Figma', description: 'Learn and Explore - 2 hours', dueDate: '2024-12-02', completed: false },
    { title: 'Workout', description: '1 hour every day without fail', dueDate: '2024-12-01', completed: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, completed: false };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <div className="container">
        <header>
          <h1>Task Management</h1>
          
        </header>
        <section className="add-todo">
          {/* <h2></h2> */}
          <form onSubmit={handleSubmit}>
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
            <button className="add-btn" type="submit">Add to list</button>
          </form>
        </section>
        <section className="todo-list">
          <h2>List of Todos</h2>
          {tasks.map((task, index) => (
            <div className={`task ${task.completed ? 'completed' : ''}`} key={index}>
              <div className="task-details">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <small>Due Date: {task.dueDate}</small>
              </div>
              <div className="task-buttons">
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleComplete(index)}
                  />
                  <span>Complete</span>
                </label>
                <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TaskForm;
