import { CurrencyType } from '@prisma/client';

export function getDepositLowerBoundUSD(currency: CurrencyType): number {
  switch (currency) {
    case CurrencyType.BTC: {
      return 0.1;
    }
    case CurrencyType.ETH: {
      return 0.1; // 50 USD
    }
    default: {
      return 0.1; // 10 USD
    }
  }
}
