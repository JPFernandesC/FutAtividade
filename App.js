import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from './screens/EscudoScreen';
import ProfileScreen from './screens/JogadoresScreen';
import SettingsScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          {/* HomeScreen */}
          <Tab.Screen
            name='EscudoScreen'
            component={HomeScreen}
            options={{
              title: 'Time',
              tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
            }}
          />

          {/* ProfileScreen */}
          <Tab.Screen
            name='JogadoresScrenn'
            component={ProfileScreen}
            options={{
              title: 'Jogadores',
              tabBarIcon: ({ color, size }) => <Ionicons name='person' color={color} size={size} />
            }}
          />


          {/* SettingsScreen */}
          <Tab.Screen
            name='TitulosScreen'
            component={SettingsScreen}
            options={{
              title: 'Titulos',
              tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
            }}
            />

        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}