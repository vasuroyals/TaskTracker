import React, { useState } from 'react';
import './index.css'

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, dueDate, status };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form className='main-container' onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>
          <div>
        <label>Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

          </td>
        </tr>
        <tr>
          <td>
            <div>
              <label>Description: </label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

          </td>
        </tr>
        <tr>
          <td>
            <div>
              <label>Due Date: </label>
              <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <label>Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

          </td>
        </tr>
      </table>
      <button className='add-button' type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
