import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {CommonStyles} from '../styles';
import {useDispatch} from 'react-redux';
import {createTodo} from '../store/todos/actions';

const AddToDoForm = () => {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = React.useState('');

  const handleAdd = React.useCallback(() => {
    setTodoName('');

    dispatch(createTodo(todoName));
  }, [todoName]);

  return (
    <View style={styles.row}>
      <TextInput
        style={[CommonStyles.input, styles.input]}
        value={todoName}
        onChangeText={setTodoName}
        placeholder="Add ToDo"
      />
      <View style={styles.submitBtn}>
        <Button title="Add ToDo" onPress={handleAdd} disabled={!todoName} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  submitBtn: {
    marginLeft: 10,
  },
  row: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
});

export default AddToDoForm;
