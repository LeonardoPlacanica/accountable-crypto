import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CryptoSearchList from '../components/CryptoSearchList';
import CryptoTop10List from '../components/CryptoTop10List';
import SearchBar from '../components/SearchBar';
import {globalStyles} from '../style/global';

const Home = () => {
  const [text, setText] = useState('');

  const searchMode = text.length > 0;

  return (
    <SafeAreaView style={globalStyles.container}>
      <SearchBar onChangeText={t => setText(t)} value={text} />
      {searchMode ? (
        <>
          <Text style={[globalStyles.h1, globalStyles.margin]}>Results</Text>
          <CryptoSearchList text={text} />
        </>
      ) : (
        <>
          <Text style={[globalStyles.h1, globalStyles.margin]}>
            Top 10 Crypto
          </Text>
          <CryptoTop10List />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;
