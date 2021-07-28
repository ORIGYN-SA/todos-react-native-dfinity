import {createSlice} from '@reduxjs/toolkit';
import {TodosState} from './types';
import {createTodo, getTodos} from './actions';

const initialState: TodosState = {
  todos: [],
  loading: false,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTodos.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTodos.rejected, state => {
      state.loading = false;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
    });

    builder.addCase(createTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(createTodo.fulfilled, state => {
      state.loading = false;
    });
    builder.addCase(createTodo.rejected, state => {
      state.loading = false;
    });
  },
});

export default todosSlice;
