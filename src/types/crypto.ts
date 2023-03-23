export type CryptoType = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  market_cap_change_percentage_24h: number;
  ath: number;
  atl: number;
  circulating_supply: number;
  market_cap: number;
  market_data: {
    market_cap: {
      usd: number;
      eur: number;
      gbp: number;
    };
    total_volume: {
      usd: number;
      eur: number;
      gbp: number;
    };
    circulating_supply: number;
    total_supply?: number;
    ath: {
      usd: number;
      eur: number;
      gbp: number;
    };
    atl: {
      usd: number;
      eur: number;
      gbp: number;
    };
    sparkline_30d: {
      price: number[];
    };
  };
};

export type CryptoReducerType = {
  coins: CryptoType[];
};
