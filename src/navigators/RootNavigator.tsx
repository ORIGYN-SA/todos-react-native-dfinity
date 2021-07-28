import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TodosList from '../screens/TodosListScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todos"
        component={TodosList}
        options={{title: 'Todos List'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
