import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CryptoFavoriteList from '../components/CryptoFavoriteList';
import {globalStyles} from '../style/global';

const Favorites = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={[globalStyles.h1, globalStyles.margin]}>Favorites</Text>
      <CryptoFavoriteList />
    </SafeAreaView>
  );
};

export default Favorites;
