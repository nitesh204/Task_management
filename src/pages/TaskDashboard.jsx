import React from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskFilter from '../components/TaskFilter';

const TaskDashboard = () => (
  <div>
    <h1>Task Management Dashboard</h1>
    <TaskForm />
    <TaskFilter />
    <TaskList />
  </div>
);

export default TaskDashboard;
