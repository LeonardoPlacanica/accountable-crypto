import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CryptoDetails from '../components/CryptoDetails';
import CryptoListItem from '../components/CryptoListItem';
import CryptoPriceChart from '../components/CryptoPriceChart';
import {
  getCryptoCoinById,
  getCryptoLast30DaysPriceById,
} from '../features/CryptoSlice';
import {useAppDispatch, useAppSelector} from '../features/store';
import {globalStyles} from '../style/global';
import {MainNavigatorParamList} from '../types/navigation';

type NavigationProp = RouteProp<MainNavigatorParamList, 'CryptoDetails'>;

const Crypto = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<NavigationProp>();
  const coin = useAppSelector(state =>
    state.crypto.coins.find(c => c.id === route.params.id),
  );
  const coinFromSearch = useAppSelector(
    state => state.crypto.coinsSearch[route.params.id],
  );
  const coinDetails = useAppSelector(
    state => state.crypto.coinsDetails[route.params.id],
  );
  const coinPriceHistory = useAppSelector(
    state => state.crypto.coinsPrices[route.params.id],
  );
  const error = useAppSelector(state => state.crypto.error);
  const loading = coinDetails === undefined || coinPriceHistory === undefined;

  useEffect(() => {
    if (!coinDetails) {
      dispatch(getCryptoCoinById(route.params.id));
    }
    if (!coinPriceHistory) {
      dispatch(getCryptoLast30DaysPriceById(route.params.id));
    }
  }, [dispatch, route.params.id, coinDetails, coinPriceHistory]);

  if (!coin && !coinFromSearch) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Text style={[globalStyles.h1, globalStyles.margin]}>
          Coin not found
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={[globalStyles.h1, globalStyles.margin]}>
        {coin?.name ?? coinFromSearch!.name}
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <CryptoListItem
          id={coin?.id ?? coinFromSearch!.id}
          name={coin?.name ?? coinFromSearch!.name}
          symbol={coin?.image ?? coinFromSearch!.thumb}
          rank={coin?.market_cap_rank ?? coinFromSearch!.market_cap_rank}
          price={coin?.current_price}
          percentChange24h={coin?.price_change_percentage_24h}
          marketCapChange24h={coin?.market_cap_change_percentage_24h}
          disableNavigation
        />
        {loading && !error && <ActivityIndicator size="large" />}
        {error && (
          <Text style={globalStyles.error}>
            There was an error loading coin details
          </Text>
        )}
        {!loading && !error && (
          <>
            <Text style={[globalStyles.h2, globalStyles.margin]}>
              Price Chart (USD)
            </Text>
            <CryptoPriceChart data={coinPriceHistory} />
            <CryptoDetails
              priceUSD={coinDetails.market_data.current_price.usd}
              priceEUR={coinDetails.market_data.current_price.eur}
              priceGBP={coinDetails.market_data.current_price.gbp}
              totalSupply={coinDetails.market_data.total_supply}
              allTimeHigh={coinDetails.market_data.ath.usd}
              allTimeLow={coinDetails.market_data.atl.usd}
              percentChange24h={
                coinDetails.market_data.price_change_percentage_24h
              }
              marketCapChange24h={
                coinDetails.market_data.market_cap_change_percentage_24h
              }
              marketCap={coinDetails.market_data.market_cap.usd}
              circulatingSupply={coinDetails.market_data.circulating_supply}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default Crypto;
