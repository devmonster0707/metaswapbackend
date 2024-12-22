import { union, literal, object, string } from 'zod';

export const TokenPriceResponseSchema = object({
    price: string(),
    symbol: string(),
});
