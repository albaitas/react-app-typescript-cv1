export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}
export type AddTodo = (newTodo: ITodo) => void;
export type RemoveTodo = (id: number) => void;
export type ToggleTodo = (id: number) => void;
export type UpdateTodo = (id: number, values: ITodo) => void;
export type EditTodo = (newTodo: ITodo) => void;
export type OnSubmit = (newTodo: ITodo) => void;
