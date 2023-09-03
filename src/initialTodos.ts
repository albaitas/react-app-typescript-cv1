import { ITodo } from './types';

export const initialTodos: ITodo[] = [
  { id: 3, text: 'Live show', completed: false },
  { id: 2, text: 'Copilot best practices', completed: true },
  { id: 1, text: 'Learn basic info about Copilot', completed: true },
];

export function getInitialTodos() {
  return initialTodos;
}
