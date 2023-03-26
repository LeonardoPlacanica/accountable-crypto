import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CryptoDetails from '../pages/CryptoDetails';
import {useAppDispatch} from '../features/store';
import {bootstrap} from '../features/CryptoSlice';
import {MainNavigatorParamList} from '../types/navigation';
import Favorites from '../pages/Favorites';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

const MainNavigator = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bootstrap());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CryptoDetails" component={CryptoDetails} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
