import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {toggleFromFavorites} from '../features/CryptoSlice';
import {useAppDispatch, useAppSelector} from '../features/store';

type Props = {
  id: string;
};

const CryproFavoriteButton = ({id}: Props) => {
  const dispatch = useAppDispatch();

  const isCryptoInFavorites = useAppSelector(state =>
    state.crypto.favorites.includes(id),
  );

  return (
    <TouchableOpacity onPress={() => dispatch(toggleFromFavorites(id))}>
      {isCryptoInFavorites ? (
        <Image
          source={require('../assets/heart-filled.png')}
          style={styles.image}
        />
      ) : (
        <Image source={require('../assets/heart.png')} style={styles.image} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});

export default CryproFavoriteButton;
