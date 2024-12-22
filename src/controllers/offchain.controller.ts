import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import Container from 'typedi';
import { assertNever } from '@/utils/assertNever';
import { ResponseSuccess } from '@/interfaces/common.interface';
import { OffChainService } from '@/services/offchain.service';
import { SendAmountByOffChainDto } from '@/dtos/offchain.dto';

export class OffChainController {
  public offchain = Container.get(OffChainService);

  public async send(req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
    try {
      if (req.body instanceof SendAmountByOffChainDto === false) {
        throw new Error('SendAmountByOffChain required');
      }
      const { senderId, receiverAddress, currencyId, amount } = req.body;
      const sendResult = await this.offchain.send(senderId, receiverAddress, currencyId, amount);
      switch (sendResult.kind) {
        case 'OK': {
          res.status(200).json({ kind: sendResult.kind, data: sendResult.data });
          break;
        }
        case 'SENDER_NOT_FOUND': {
          res.status(404).json({
            kind: 'SENDER_NOT_FOUND',
            message: 'SENDER_NOT_FOUND',
          });
          break;
        }
        case 'RECEIVER_NOT_FOUND': {
          res.status(404).json({
            kind: 'RECEIVER_NOT_FOUND',
            message: 'RECEIVER_NOT_FOUND',
          });
          break;
        }
        case 'BALANCE_NOT_ENOUGH': {
          res.status(404).json({
            kind: 'BALANCE_NOT_ENOUGH',
            message: 'BALANCE_NOT_ENOUGH',
          });
          break;
        }
        default: {
          assertNever(sendResult);
        }
      }
    } catch (error) {
      next(error);
    }
    

  }
}