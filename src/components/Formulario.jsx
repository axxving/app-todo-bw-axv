import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: '',
        priority: false,
    });

    const { title, description, state, priority } = todo;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title.trim() || !description.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'No puedes dejar campos vacios',
            })
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'Completado'
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Todo agregado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const hanldeChange = (e) => {

        const { name, type, checked, value } = e.target

        setTodo({
            ...todo,
            [name]:
                type === 'checkbox'
                    ? checked
                    : value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Ingrese tarea'
                className='form-control mb-2'
                name='title'
                value={title}
                onChange={hanldeChange}
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
                value={description}
                onChange={hanldeChange}
            />
            <div className='mt-3 mb-3'>
                <input
                    type='checkbox'
                    name='priority'
                    className='form-check-input'
                    id='inputCheck'
                    checked={priority}
                    onChange={hanldeChange}
                />
                <label htmlFor='inputCheck' className='ms-3'>Dar prioridad</label>
            </div>
            <select
                className='form-select mb-2'
                name='state'
                value={state}
                onChange={hanldeChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button
                type="submit"
                className='btn btn-primary'
            >
                Agregar Tarea
            </button>
        </form>
    );
}