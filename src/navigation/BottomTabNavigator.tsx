/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Main from '../screens/Main';
import NewJoke from '../screens/NewJoke';
import Pending from '../screens/Pending';

import { BottomTabParamList, PendingParamList, MainParamList, NewJokeParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor:Colors[colorScheme].tint, showLabel: false,
        style: {
          backgroundColor: "#1D3354",
          borderTopColor: "#1D3354"
        },
        iconStyle: {
          color: "#fff",
        },
        labelStyle: {
          color: "#fff",
        }
      }}>
      <BottomTab.Screen
        name="Main"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" color={color} size={30} />,
        }}
      />
      <BottomTab.Screen
        name="NewJoke"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="plus" color={color} size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Pending"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="staro" color={color} size={30} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<MainParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="MainScreen"
        component={Main}
        options={{
          headerTitle: 'Gerador de piadas',
          headerStyle: {
            backgroundColor: "#1D3354",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<NewJokeParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="NewJokeScreen"
        component={NewJoke}
        options={{
          headerTitle: 'Nova piada',
          headerStyle: {
            backgroundColor: "#1D3354",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<PendingParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="PendingScreen"
        component={Pending}
        options={{
          headerTitle: 'Piadas pendentes',
          headerStyle: {
            backgroundColor: "#1D3354",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
      />
    </TabThreeStack.Navigator>
  );
}

