import {createAsyncThunk} from '@reduxjs/toolkit';
import {getSimpleDoToActor} from '../../utils/actor';
import {Alert} from 'react-native';
import {TodoItem} from './types';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const actor = await getSimpleDoToActor();

  try {
    const todos = await actor.getTodos();

    return todos.map(
      todo =>
        ({
          ...todo,
          id: todo.id.toString(),
        } as TodoItem),
    );
  } catch (e) {
    Alert.alert('Error', `Failed to fetch todos!\n${e.message}`);
    throw e;
  }
});

export const createTodo = createAsyncThunk<void, string>(
  'todos/createTodo',
  async (action, thunkAPI) => {
    const actor = await getSimpleDoToActor();

    try {
      await actor.addTodo(action);
      thunkAPI.dispatch(getTodos());
    } catch (e) {
      Alert.alert('Error', `Failed to add todo!\n${e.message}`);
      throw e;
    }
  },
);
