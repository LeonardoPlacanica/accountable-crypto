import React, {useEffect} from 'react';
import {StyleSheet, ScrollView, Text, ActivityIndicator} from 'react-native';
import {searchCryptoByName} from '../features/CryptoSlice';
import {useAppDispatch, useAppSelector} from '../features/store';
import {globalStyles} from '../style/global';
import CryptoListItem from './CryptoListItem';

type Props = {
  text: string;
};

const CryptoList = ({text}: Props) => {
  const dispatch = useAppDispatch();

  const results =
    useAppSelector(state => state.crypto.coinsSearchByKey[text]) ?? [];

  const keys = Object.keys(
    useAppSelector(state => state.crypto.coinsSearchByKey),
  );
  const loading = useAppSelector(state => state.crypto.loading);
  const error = useAppSelector(state => state.crypto.error);

  useEffect(() => {
    if (!keys.includes(text)) {
      dispatch(searchCryptoByName(text));
    }
  }, [dispatch, text, keys]);

  return (
    <ScrollView style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && !loading && (
        <Text style={globalStyles.error}>
          There was an error loading coins details
        </Text>
      )}
      {results.map(coin => (
        <CryptoListItem
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.thumb}
          rank={coin.market_cap_rank}
        />
      ))}
      {results.length === 0 && !loading && (
        <Text style={[globalStyles.h2, globalStyles.margin]}>
          No results found
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CryptoList;
