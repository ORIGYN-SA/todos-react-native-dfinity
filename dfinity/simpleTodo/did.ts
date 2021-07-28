import {IDL} from '@dfinity/candid';

export const SIMPLE_TODO_DID: IDL.InterfaceFactory = ({IDL}) => {
  const ToDo = IDL.Record({
    id: IDL.Nat,
    completed: IDL.Bool,
    description: IDL.Text,
  });
  return IDL.Service({
    addTodo: IDL.Func([IDL.Text], [], []),
    clearCompleted: IDL.Func([], [], []),
    completeTodo: IDL.Func([IDL.Nat], [], []),
    getTodos: IDL.Func([], [IDL.Vec(ToDo)], ['query']),
    showTodos: IDL.Func([], [IDL.Text], ['query']),
  });
};
