import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TodoItem} from '../store/todos/types';

interface TodosListProps {
  todos: TodoItem[];
}

const TodosList: React.FC<TodosListProps> = props => {
  const {todos} = props;

  const renderItem = React.useCallback(
    ({item}: ListRenderItemInfo<TodoItem>) => {
      return (
        <View style={styles.item}>
          <Text numberOfLines={1}>#{item.id}</Text>
          <Text numberOfLines={1}>{item.description}</Text>
        </View>
      );
    },
    [],
  );

  const keyExtractor = React.useCallback((item: TodoItem) => {
    return item.id;
  }, []);

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    borderColor: 'black',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    padding: 15,
  },
});

export default TodosList;
