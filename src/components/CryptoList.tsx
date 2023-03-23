import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useAppSelector} from '../features/store';
import CryptoListItem from './CryptoListItem';

const CryptoList = () => {
  const coins = useAppSelector(state => state.crypto.coins);
  console.log(coins);
  return (
    <ScrollView style={styles.container}>
      {coins.map(coin => (
        <CryptoListItem
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.image}
          price={coin.current_price}
          rank={coin.market_cap_rank}
          percentChange24h={coin.price_change_percentage_24h}
          marketCapChange24h={coin.market_cap_change_percentage_24h}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
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
