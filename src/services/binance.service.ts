import { BinanceApi } from '@/lib/binance-api/binance-api';
import { assertNever } from '@/utils/assertNever';
import { Service } from 'typedi';

export type GetCurrencyPriceResult =
  | {
      kind: 'OK';
      price: number;
    }
  | {
      kind: 'NOT_FOUND_ERR';
    };

const TTL = 1000 * 60 * 5; // 5 min

@Service()
export class BinanceService {
  private _binanceApi = new BinanceApi();
  private _cache: Map<string, [number, number]> = new Map();

  public async getCurrencyPrice(currency: string, output: string): Promise<GetCurrencyPriceResult> {
    const getPriceResult = await this._binanceApi.getPrice(currency, output);
    switch (getPriceResult.kind) {
      case 'NOT_FOUND_ERR': {
        return { kind: 'NOT_FOUND_ERR' };
      }
      case 'OK': {
        return {
          kind: 'OK',
          price: getPriceResult.price,
        };
      }
      default: {
        assertNever(getPriceResult);
      }
    }
  }
}

