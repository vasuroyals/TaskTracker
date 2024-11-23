import React, { useState, useEffect } from 'react';
import AddTaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import EditTaskModal from './components/EditTaskModel';

function App() {
  const [tasks, setTasks] = useState([]); 
  const [editingTask, setEditingTask] = useState(null); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    updateTasks(updatedTasks);
  };


  const handleEditTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    updateTasks(updatedTasks);
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      updateTasks(updatedTasks);
    }
  };

  const updateTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="app-container">
      <h1 className="heading">Task Tracker</h1>

  
      <AddTaskForm onAddTask={handleAddTask} />


      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onEdit={(task) => setEditingTask(task)}
          onDelete={handleDeleteTask}
        />
      ) : (
        <p className="no-tasks-message">No tasks added yet!</p>
      )}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={handleEditTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default App;
