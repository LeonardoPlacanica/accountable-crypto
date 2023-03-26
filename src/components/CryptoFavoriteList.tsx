import React, {useMemo} from 'react';
import {
  StyleSheet,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {getTop10CryptoCoins} from '../features/CryptoSlice';
import {useAppDispatch, useAppSelector} from '../features/store';
import {CryptoType} from '../types/crypto';
import {isCloseToBottom} from '../utils/scroll';
import CryptoListItem from './CryptoListItem';

const CryptoFavoriteList = () => {
  const dispatch = useAppDispatch();

  const favoritesCoins = useAppSelector(state => state.crypto.favorites);
  const coinsCollection = useAppSelector(state => state.crypto.coins);
  const page = useAppSelector(state => state.crypto.page);
  const loading = useAppSelector(state => state.crypto.loading);

  const mappedCoins = useMemo(
    () =>
      favoritesCoins.map(id => coinsCollection.find(coin => coin.id === id)),
    [favoritesCoins, coinsCollection],
  );
  const coins = useMemo(
    () => mappedCoins.filter(coin => coin !== undefined) as CryptoType[],
    [mappedCoins],
  );

  const onScroll = (_event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(_event.nativeEvent) && !loading) {
      dispatch(getTop10CryptoCoins(page + 1));
    }
  };

  return (
    <ScrollView
      style={styles.container}
      onScroll={onScroll}
      scrollEventThrottle={400}>
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

export default CryptoFavoriteList;
