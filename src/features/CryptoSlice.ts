import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getTop10CryptoCoinGeckoApi} from '../api/cryptoApi';
import {CryptoReducerType} from '../types/crypto';

const initialState: CryptoReducerType = {
  coins: [],
};

export const bootstrap = createAsyncThunk(
  'crypto/bootstrap',
  async (_, thunkApi) => {
    thunkApi.dispatch(getTop10CryptoCoins());
  },
);

export const getTop10CryptoCoins = createAsyncThunk(
  'crypto/getTop10CryptoCoins',
  async () => {
    const res = await getTop10CryptoCoinGeckoApi();
    return res;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setSelectedOrganization: (state, action) => {
      state.coins = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getTop10CryptoCoins.fulfilled, (state, action) => {
      state.coins = action.payload;
    });
    builder.addCase(getTop10CryptoCoins.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const {setSelectedOrganization} = cryptoSlice.actions;

export default cryptoSlice.reducer;
