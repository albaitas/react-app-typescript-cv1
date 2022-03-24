import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { initialTodos } from '../initialTodos';
import TodoForm from './TodoForm';
import { AddTodo, ToggleTodo, RemoveTodo, UpdateTodo } from '../types';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const add: AddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const remove: RemoveTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggle: ToggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const update: UpdateTodo = (id, values) => {
    const updatedTodos = todos.map((item) => (item.id === id ? values : item));
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={add} />
      <TodoItem todos={todos} removeTodo={remove} toggleTodo={toggle} updateTodo={update} />
    </>
  );
};

export default TodoList;
