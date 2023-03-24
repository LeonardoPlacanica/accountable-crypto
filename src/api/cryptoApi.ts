import {
  CryptoAPIPriceType,
  CryptoType,
  SearchCryptoType,
} from '../types/crypto';

export const getTop10CryptoCoinGeckoApi = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );
  const data = await response.json();
  return data as CryptoType[];
};

export const getCryptoCoinGeckoApiById = async (id: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );
  const data = await response.json();
  return data as CryptoType;
};

export const getCryptoLast30DaysPriceConinGeckoApiById = async (id: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`,
  );
  const data = await response.json();
  return data as CryptoAPIPriceType;
};

export const searchCryptoByNameCoinGeckoApi = async (name: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${name}`,
  );
  const data = await response.json();
  return data.coins as SearchCryptoType[];
};
