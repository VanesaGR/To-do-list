import '../styles/reset.css';
import '../styles/App.css';
import acceptImg from '../images/aceptar.png';
import cancelImg from '../images/cancelar.png';

import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  
  const addTask = () => {
    if (newTask.trim() !== '') { // Verifica si la tarea no está en blanco
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtra la tarea en la posición index
    setTasks(updatedTasks); 
  };

  return (
      <div className='full-container'>
      <h1 className='title'>To-do List</h1>
      <textarea
        maxLength={250}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
        className='input'
      />
      <img src={acceptImg} alt='accept' onClick={addTask} className='accept-btn' id='accept-btn'/>
      <div className='task-container'>
        {tasks.map((task, index) => (
          <div className='line'>
            <div key={index} className='task-item'>
            {task}
          </div>
          <img src={cancelImg} alt='delete' className='delete-btn' onClick={() => removeTask(index)} />
      </div>
        ))}
      </div>
    </div>
  );
}

export default App;
