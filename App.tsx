import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import EventScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';
import { AuthContext } from './context';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthContext.Provider value={AuthContext}>
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          ></AuthStack.Screen>
          <AuthStack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          ></AuthStack.Screen>
        </AuthStack.Navigator>
        <MainStack.Navigator>
          <MainStack.Screen
            name="EventsScreen"
            component={EventScreen}
          ></MainStack.Screen>
          <MainStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
          ></MainStack.Screen>
        </MainStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
