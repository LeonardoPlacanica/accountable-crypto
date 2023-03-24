import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../style/global';
import {formatNumberToCurrency} from '../utils/format';

type Props = {
  priceUSD: number;
  priceEUR: number;
  priceGBP: number;
  percentChange24h: number;
  marketCapChange24h: number;
  allTimeHigh: number;
  allTimeLow: number;
  marketCap: number;
  circulatingSupply: number;
  totalSupply: number;
};

const CryptoDetails = ({
  priceUSD,
  priceEUR,
  priceGBP,
  percentChange24h,
  marketCapChange24h,
  allTimeHigh,
  allTimeLow,
  marketCap,
  circulatingSupply,
  totalSupply,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Price (USD):</Text>
        <Text>{formatNumberToCurrency(priceUSD)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Price (GBP):</Text>
        <Text>{formatNumberToCurrency(priceGBP)}£</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Price (EUR):</Text>
        <Text>{formatNumberToCurrency(priceEUR)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Market Cap:</Text>
        <Text>{formatNumberToCurrency(marketCap)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Circulating Supply:</Text>
        <Text>{formatNumberToCurrency(circulatingSupply)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Total Supply:</Text>
        <Text>{formatNumberToCurrency(totalSupply)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Percentage Change (24 hours):</Text>
        <Text>{percentChange24h}%</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>All time high:</Text>
        <Text>{formatNumberToCurrency(allTimeHigh)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>All time low:</Text>
        <Text>{formatNumberToCurrency(allTimeLow)}$</Text>
      </View>
      <View style={[globalStyles.row, globalStyles.marginVertical]}>
        <Text style={styles.name}>Market Cap Change (24 hours):</Text>
        <Text>{marketCapChange24h}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
