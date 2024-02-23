import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import rootReducer from './src/reducers';
import UserList from './src/components/UserList';
import UserProfile from './src/components/UserProfile';
import TaskList from './src/components/TaskList';

const store = createStore(rootReducer, applyMiddleware(thunk));

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; // Configura la URL base de la API

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserList">
          <Stack.Screen name="UserList" component={UserList} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="TaskList" component={TaskList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
