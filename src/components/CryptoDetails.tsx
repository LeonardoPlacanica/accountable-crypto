import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../style/global';

type Props = {
  price: number;
  percentChange24h: number;
  marketCapChange24h: number;
  allTimeHigh: number;
  allTimeLow: number;
  marketCap: number;
  circulatingSupply: number;
};

const CryptoDetails = ({
  price,
  percentChange24h,
  marketCapChange24h,
  allTimeHigh,
  allTimeLow,
  marketCap,
  circulatingSupply,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Price (USD):</Text>
        <Text>{price}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Market Cap:</Text>
        <Text>{marketCap}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Circulating Supply:</Text>
        <Text>{circulatingSupply}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Percentage Change (24 hours):</Text>
        <Text>{percentChange24h}%</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>All time high:</Text>
        <Text>{allTimeHigh}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>All time low:</Text>
        <Text>{allTimeLow}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Percentage Change (7 days):</Text>
        <Text>{marketCapChange24h}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CryptoDetails;
