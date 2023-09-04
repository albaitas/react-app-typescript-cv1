import { ITodo } from './types';

export const initialTodos: ITodo[] = [
  { id: 3, text: 'Live show', completed: false },
  { id: 2, text: 'Copilot best practices', completed: true },
  { id: 1, text: 'Learn basic info about Copilot', completed: true },
];

export function getInitialTodos() {
  return initialTodos;
}

// todo:
// - create storage class that is searchable by string - case insensitive
// - make sure it works with emojis and other special characters
// - make sure it works with different languages
// - make sure it works with different encodings
// - cover it with tests
