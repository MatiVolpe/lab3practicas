import React, { useState } from 'react';
import { Button, Checkbox, TextField, Tooltip } from '@mui/material';
import ListGroup from 'react-bootstrap/ListGroup';
import './ToDoList.css'

function TodoList({ initialChores }) {
    const [chores, setChores] = useState(initialChores);
    const [newTaskName, setNewTaskName] = useState('');

    const addChore = () => {
        if (newTaskName.trim() === '') {
            alert("No puede haber tareas sin nombre");
            return;
        }

        const newChore = {
            id: Math.random(),
            name: newTaskName.trim(),
            completed: false,
        };
        setChores([...chores, newChore]);
        setNewTaskName('');
    };
    const deleteCompletedTasks = () => {
        const updatedChores = chores.filter((chore) => !chore.completed);
        setChores(updatedChores);
    };

    const toggleTaskCompletion = (id) => {
        const updatedChores = chores.map((chore) =>
            chore.id === id ? { ...chore, completed: !chore.completed } : chore
        
        );
        setChores(updatedChores);
    };

    return (
        <div>
            <h2>LISTA DE TAREAS</h2>
            <TextField
                label="Agregar nueva tarea.."
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                fullWidth
            />
            <ListGroup variant="flush">
                {chores.map((item) => (
                    <ListGroup.Item key={item.id}>
                        <span className={item.completed ? 'tachado' : ''}>
                            {item.name}
                        </span>
                        <Tooltip title="Marcar como completada">
                            <Checkbox checked={item.completed} onChange={ () => toggleTaskCompletion(item.id)} />
                        </Tooltip>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            <Button variant="contained" onClick={addChore}>
                Agregar Tarea
            </Button>

            <Button variant="contained" onClick={deleteCompletedTasks}>
                Borrar tareas completadas
            </Button>
        </div>
    );
}

export default TodoList;
