import { TokenPriceResponseSchema } from './schemas.ts';

export type GetPriceResult =
  | {
      kind: 'OK';
      price: number;
    }
  | {
      kind: 'NOT_FOUND_ERR';
    };

const DEFAULT_BINANCE_API_HOST = 'https://www.binance.com/api/v3/ticker/price';

export class BinanceApi {
  private _apiHost: string;

  constructor(apiHost?: string) {
    this._apiHost = apiHost ?? DEFAULT_BINANCE_API_HOST;
  }

  async getPrice(base: string, currency: string): Promise<GetPriceResult> {
    const endpoint = `${this._apiHost}?symbol=${encodeURIComponent(base)}${encodeURIComponent(currency)}`;
    console.log(endpoint)
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const body = await response.json();
        const apiResponse = TokenPriceResponseSchema.parse(body);
        const priceStr = apiResponse.price;
        const priceFloat = parseFloat(priceStr);
        return { kind: 'OK', price: priceFloat };
      } else if (response.status === 404) {
        return { kind: 'NOT_FOUND_ERR' };
      } else {
        return { kind: 'NOT_FOUND_ERR' };
        throw new Error(`failed to fetch price ${response.statusText}`);
      }
    } catch (e) {
      return { kind: 'NOT_FOUND_ERR' };
      throw new Error(`failed to fetch price ${e}`);
    }
  }
}
