import {ToDo} from '../../../dfinity/simpleTodo/types';

export type TodoItem = ToDo & {
  id: string;
};

export type TodosState = {
  todos: TodoItem[];
  loading: boolean;
};
