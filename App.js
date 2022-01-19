import React from 'react';
import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import PickerItem from './app/components/PickerItem';
export default function App() {
  return <WelcomeScreen />;
}
