import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {VictoryChart, VictoryLine} from 'victory-native';
import {DEVICE_WIDTH} from '../style/global';

type Props = {
  data: {date: number; price: number}[];
};

const CryptoPriceChart = ({data}: Props) => {
  const victoryData = useMemo(
    () =>
      data.map(d => ({
        x: new Date(d.date),
        y: d.price,
      })),
    [data],
  );
  return (
    <View style={styles.container}>
      <VictoryChart
        width={DEVICE_WIDTH - 10}
        domainPadding={{y: 20}}
        padding={55}>
        <VictoryLine data={victoryData} />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
});

export default CryptoPriceChart;
