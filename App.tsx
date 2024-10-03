import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';
import BoardListScreen from './screens/BoardListScreen';
import ChatListScreen from './screens/ChatListScreen';
import AlarmScreen from './screens/AlarmScreen';
import ProfileScreen from './screens/ProfileScreen';
import WriteScreen from './screens/WriteScreen';

// Stack Navigator의 타입을 정의합니다.
export type RootStackParamList = {
  LogIn: undefined; 
  Home: undefined;
  BoardList: undefined;
  ChatList: undefined;
  Alarm: undefined;
  Profile: undefined;
  Write: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BoardList" component={BoardListScreen} />
        <Stack.Screen name="ChatList" component={ChatListScreen} />
        <Stack.Screen name="Alarm" component={AlarmScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Write" component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
