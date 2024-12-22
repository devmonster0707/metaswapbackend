import { App } from '@/app';

import { StatusRoute } from './routes/status.route';
import { AccountRoute } from './routes/account.route';
import { CurrenciesRoute } from './routes/currencies.route';
import { LanguagesRoute } from './routes/languages.route';
import { AssetsRoute } from './routes/assets.route';
import { InternalTransfersRoute } from './routes/internalTransfers.route';
import Container from 'typedi';
import { BotService } from './services/bot.service';
import { TransactionsRoute } from './routes/transactions.route';
import { CalypsoEventsRoute } from './routes/calypso-events.route';
import { DepositsRoute } from './routes/deposits.route';
import { QrRoute } from './routes/qr.route';
import { DepositCurrenciesRoute } from './routes/deposit-currencies.route';
import { PayoutsRoute } from './routes/payouts.route';
import { PayoutCurrenciesRoute } from './routes/payout-currencies.route';
import { PriceCurrenciesRoute } from './routes/price-currencies.route';
import { AutoconvertsRoute } from './routes/autoconverts.route';
import { AutoconvertCurrenciesRoute } from './routes/autoconvert-currencies.route';
import { OtpRoute } from './routes/otp.route';
import { VerificationRoute } from './routes/verification.route';
import { FeedbacksRoute } from './routes/feedbacks.route';
import { NewsRoute } from './routes/news.route';
import { DocumentsRoute } from './routes/documents.route';
import { FeesRoute } from './routes/fees.route';
import { schedule } from './cron';
import { logger } from './utils/logger';
import { SwapsRoute } from './routes/swap.route';
import { LimitsRoute } from './routes/limits.route';

process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

const app = new App([
  new StatusRoute(),
  new LanguagesRoute(),
  new CurrenciesRoute(),
  new AccountRoute(),
  new AssetsRoute(),
  new InternalTransfersRoute(),
  new TransactionsRoute(),
  new DepositCurrenciesRoute(),
  new DepositsRoute(),
  new PayoutCurrenciesRoute(),
  new PayoutsRoute(),
  new CalypsoEventsRoute(),
  new QrRoute(),
  new PriceCurrenciesRoute(),
  new AutoconvertCurrenciesRoute(),
  new AutoconvertsRoute(),
  new OtpRoute(),
  new VerificationRoute(),
  new SwapsRoute(),
  new FeedbacksRoute(),
  new NewsRoute(),
  new DocumentsRoute(),
  new FeesRoute(),
  new LimitsRoute(),
]);

app.listen();

const botService = Container.get(BotService);
botService.start().catch(console.error);

if (process.env.SYNC === 'true' && process.env.INSTANCE_ID === '0') {
  logger.info('run scheduler');
  schedule();
}
