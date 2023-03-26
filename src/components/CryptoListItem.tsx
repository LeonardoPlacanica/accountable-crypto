import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from '../style/global';
import {MainNavigatorParamList} from '../types/navigation';
import {formatNumberToCurrency} from '../utils/format';
import CryproFavoriteButton from './CryproFavoriteButton';

type Props = {
  id: string;
  name: string;
  symbol: string;
  price?: number;
  rank: number;
  percentChange24h?: number;
  marketCapChange24h?: number;
  disableNavigation?: boolean;
};

type NavigationProp = NativeStackNavigationProp<MainNavigatorParamList, 'Home'>;

const CryptoListItem = ({
  id,
  name,
  symbol,
  price,
  percentChange24h,
  marketCapChange24h,
  rank,
  disableNavigation = false,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  const onPress = () => {
    navigation.navigate('CryptoDetails', {id});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disableNavigation}>
      <View style={[styles.row, globalStyles.marginVertical]}>
        <Text style={styles.rank}>{rank}</Text>
        <CryproFavoriteButton id={id} />
      </View>
      <View style={[styles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{uri: symbol}} style={styles.image} />
      </View>
      <View style={styles.row}>
        <Text>Price (USD):</Text>
        <Text>{price ? formatNumberToCurrency(price) + '$' : '-'}</Text>
      </View>
      <View style={styles.row}>
        <Text>Percentage Change (24 hours):</Text>
        <Text>{percentChange24h ? percentChange24h + '%' : '-'}</Text>
      </View>
      <View style={styles.row}>
        <Text>Market CAP (24 hours):</Text>
        <Text>{marketCapChange24h ? marketCapChange24h + '%' : '-'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  image: {
    width: 30,
    height: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
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

export default CryptoListItem;
