import { depositCurrencies } from '@/config/deposit-currencies';
import { getDepositLowerBoundUSD } from '@/config/deposit-limits';
import { DepositCurrency, DepositCurrencyListing } from '@/interfaces/deposit-currencies.interface';
import { Service } from 'typedi';
import { Container } from 'typedi';
// import { CoinbaseService } from './coinbase.service';
import { assertNever } from '@/utils/assertNever';
import { BinanceService } from './binance.service';

@Service()
export class DepositCurrenciesService {
  // private coinbase = Container.get(CoinbaseService);
  private _binance = Container.get(BinanceService);

  public async getDepositCurrencies(): Promise<DepositCurrencyListing> {
    const items: DepositCurrency[] = [];
    for (const currency of depositCurrencies) {
      const lowerBoundUSD = getDepositLowerBoundUSD(currency.id);
      const exchangeRateResult = await this._binance.getCurrencyPrice(currency.id, 'USDT');
      switch (exchangeRateResult.kind) {
        case 'NOT_FOUND_ERR': {
          // skip currency
          continue;
        }
        case 'OK': {
          const lowerBound = lowerBoundUSD / exchangeRateResult.price;
          items.push({
            ...currency,
            lowerBound,
            lowerBoundUSD,
          });
          break;
        }
        default: {
          assertNever(exchangeRateResult);
        }
      }
    }
    return { items } satisfies DepositCurrencyListing;
  }
}
