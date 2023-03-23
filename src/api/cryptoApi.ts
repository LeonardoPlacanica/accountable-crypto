import {CryptoType} from '../types/crypto';

export const getTop10CryptoCoinGeckoApi = async () => {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  );
  const data = await response.json();
  return data as CryptoType[];
};

export const getCryptoCoinGeckoApi = async (id: string) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`,
  );
  const data = await response.json();
  return data;
};
