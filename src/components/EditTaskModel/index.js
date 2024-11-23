import React, { useState } from 'react';
import './index.css'

const EditTaskModal = ({ task, onSave, onClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const [status, setStatus] = useState(task.status);

  const handleSave = () => {
    const updatedTask = { ...task, title, description, dueDate, status };
    onSave(updatedTask);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Edit Task</h3>
        <form>
          <div>
            <label>Title: </label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div><br/>
          <div>
            <label>Description: </label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div><br/>
          <div>
            <label>Due Date: </label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div><br/>
          <div>
            <label>Status: </label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div><br/>
        </form>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditTaskModal;
