import React, { useState, useEffect, useRef } from 'react';
import { OnSubmit } from '../types';

interface TodoFormProps {
  onSubmit: OnSubmit;
  edit?: { id: number; value: string };
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, edit }) => {
  const [task, setTask] = useState(edit ? edit.value : '');

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus();
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (!task || /^\s*$/.test(task)) return;
    onSubmit({ id: Date.now(), text: task, completed: false });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {edit ? (
        <>
          <input
            placeholder='Update your item'
            value={task}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={task}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
