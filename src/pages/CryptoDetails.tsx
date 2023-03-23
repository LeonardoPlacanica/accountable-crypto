import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import CryptoDetails from '../components/CryptoDetails';
import CryptoListItem from '../components/CryptoListItem';
import {useAppSelector} from '../features/store';
import {globalStyles} from '../style/global';
import {MainNavigatorParamList} from '../types/navigation';

type NavigationProp = RouteProp<MainNavigatorParamList, 'CryptoDetails'>;

const Crypto = () => {
  const route = useRoute<NavigationProp>();
  const coin = useAppSelector(state =>
    state.crypto.coins.find(c => c.id === route.params.id),
  );

  if (!coin) {
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
      <Text style={[globalStyles.h1, globalStyles.margin]}>{coin.name}</Text>
      <CryptoListItem
        id={coin.id}
        name={coin.name}
        symbol={coin.image}
        price={coin.current_price}
        rank={coin.market_cap_rank}
        percentChange24h={coin.price_change_percentage_24h}
        marketCapChange24h={coin.market_cap_change_percentage_24h}
      />
      <CryptoDetails
        price={coin.current_price}
        allTimeHigh={coin.ath}
        allTimeLow={coin.atl}
        percentChange24h={coin.price_change_percentage_24h}
        marketCapChange24h={coin.market_cap_change_percentage_24h}
        marketCap={coin.market_cap}
        circulatingSupply={coin.circulating_supply}
      />
    </SafeAreaView>
  );
};

export default Crypto;
