import React, { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList({ initialChores }) {
    const [chores, setChores] = useState(initialChores);
    const [newTaskName, setNewTaskName] = useState('');

    const addChore = () => {
        if (newTaskName.trim() === '') {
            alert("No puede haber tareas sin nombre");
            return;
        }

        const newChore = {
            id: chores.length + 1,
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
                        {item.name}
                        <Checkbox onChange={ () => toggleTaskCompletion(item.id)} />
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
