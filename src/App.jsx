import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Todos } from './components/Todos';

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

export const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray);
  }

  const updateTodo = (id) => {
    const newArray = todos.map(todo => {
      if(todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    })
    setTodos(newArray);
  }

  const orderTodo = (arrayTodos) => 
    arrayTodos.sort((a, b) => b.priority - a.priority);
  
  return (
    <div className='container mt-2 mb-5'>
      <h1>App de Tareas</h1>
      <Formulario addTodo={addTodo} />
      <Todos 
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo} 
      />
    </div>
  );
}
