import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  getCryptoCoinGeckoApiById,
  getCryptoLast30DaysPriceConinGeckoApiById,
  getTop10CryptoCoinGeckoApi,
  searchCryptoByNameCoinGeckoApi,
} from '../api/cryptoApi';
import {CryptoReducerType} from '../types/crypto';

const initialState: CryptoReducerType = {
  coins: [],
  coinsDetails: {},
  coinsPrices: {},
  coinsSearchByKey: {},
  coinsSearch: {},
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

export const getCryptoCoinById = createAsyncThunk(
  'crypto/getCryptoCoinById',
  async (id: string) => {
    const res = await getCryptoCoinGeckoApiById(id);
    return res;
  },
);

export const getCryptoLast30DaysPriceById = createAsyncThunk(
  'crypto/getCryptoLast30DaysPriceById',
  async (id: string) => {
    const res = await getCryptoLast30DaysPriceConinGeckoApiById(id);
    return res.prices.map((item: [number, number]) => {
      return {
        date: item[0],
        price: item[1],
      };
    });
  },
);

export const searchCryptoByName = createAsyncThunk(
  'crypto/searchCryptoByName',
  async (name: string) => {
    console.log('searchCryptoByName', name);
    const res = await searchCryptoByNameCoinGeckoApi(name);
    console.log(res);
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
    builder.addCase(getCryptoCoinById.fulfilled, (state, action) => {
      state.coinsDetails = {
        ...state.coinsDetails,
        [action.payload.id]: action.payload,
      };
    });
    builder.addCase(getCryptoCoinById.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(getCryptoLast30DaysPriceById.fulfilled, (state, action) => {
      state.coinsPrices = {
        ...state.coinsPrices,
        [action.meta.arg]: action.payload,
      };
    });
    builder.addCase(getCryptoLast30DaysPriceById.rejected, (state, action) => {
      console.log(action.error.message);
    });
    builder.addCase(searchCryptoByName.fulfilled, (state, action) => {
      state.coinsSearchByKey = {
        ...state.coinsSearchByKey,
        [action.meta.arg]: action.payload,
      };
      for (const coin of action.payload) {
        state.coinsSearch = {
          ...state.coinsSearch,
          [coin.id]: coin,
        };
      }
    });
    builder.addCase(searchCryptoByName.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const {setSelectedOrganization} = cryptoSlice.actions;

export default cryptoSlice.reducer;
