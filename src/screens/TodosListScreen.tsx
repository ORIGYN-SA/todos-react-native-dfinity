import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTodos} from '../store/todos/actions';
import {RootState} from '../store/store';
import Spinner from 'react-native-loading-spinner-overlay';
import TodosList from '../components/TodosList';
import AddToDoForm from '../components/AddToDoForm';

const TodosListScreen = () => {
  const {loading, todos} = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <AddToDoForm />
      <TodosList todos={todos} />
      <Spinner visible={loading} />
    </>
  );
};

export default TodosListScreen;
