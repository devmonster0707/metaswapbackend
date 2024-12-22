import { NextFunction, Response } from 'express';
import { SwapRatesRequest } from '@/interfaces/swap-rates.interface';
import { convertCryptoAmount } from '@/utils/getCryptoRates';

export class SwapRatesController {
  public getRates = async (_req: SwapRatesRequest, res: Response, _next: NextFunction): Promise<void> => {
    try {
      const { sourceCurrency, destinationCurrency } = _req.body;
      console.log(sourceCurrency, destinationCurrency);
      const response = await convertCryptoAmount(sourceCurrency, destinationCurrency);
      console.log(response);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
