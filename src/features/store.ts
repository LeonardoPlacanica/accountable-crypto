import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {CryptoReducerType} from '../types/crypto';
import cryptoReducer from './CryptoSlice';

export interface StoreType {
  crypto: CryptoReducerType;
}

const store = configureStore<StoreType>({
  reducer: {
    crypto: cryptoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export default store;
