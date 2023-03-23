import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CryptoList from '../components/CryptoList';
import {globalStyles} from '../style/global';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={[globalStyles.h1, globalStyles.margin]}>Top 10 Crypto</Text>
      <CryptoList />
    </SafeAreaView>
  );
};

export default Home;
