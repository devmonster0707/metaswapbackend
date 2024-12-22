import { Service } from 'typedi';
import { prisma } from '@/prisma-client';
import { Asset, CurrencyType, User } from '@prisma/client';
import { assertNever } from '@/utils/assertNever';
import { currencies } from '@/config/currencies';

export type SendResult = { kind: 'OK', data: Asset } | { kind: 'SENDER_NOT_FOUND' } | { kind: 'RECEIVER_NOT_FOUND' } | { kind: 'BALANCE_NOT_ENOUGH' };

@Service()
export class OffChainService {
  public user = prisma.user;
  public asset = prisma.asset;

  public async send(senderId: number, receiverAddress: string, currencyId: string, amount: number): Promise<SendResult> {
    const sender = await this.user.findFirst({
      where: {
        id: senderId
      },
    })

    if (!sender) {
      return { kind: 'SENDER_NOT_FOUND' };
    }

    const receiver = await this.user.findFirst({
      where: {
        publicId: receiverAddress
      },
    })

    if (!receiver) {
      return { kind: 'RECEIVER_NOT_FOUND' }
    }

    const existsAssets = await this.asset.findFirst({
      where: {
        ownerId: senderId,
        currencyId: CurrencyType[currencyId]
      },
    });

    if (!existsAssets || existsAssets.amount < amount) {
      return { kind: 'BALANCE_NOT_ENOUGH' }
    }

    const result = await prisma.asset.update({
      where: {
        ownerId_currencyId: {
          ownerId: senderId,
          currencyId: CurrencyType[currencyId],
        },
      },
      data: {
        amount: existsAssets.amount - amount
      }
    })

    await prisma.$transaction([
      prisma.asset.upsert({
        where: {
          ownerId_currencyId: {
            ownerId: receiver.id,
            currencyId: CurrencyType[currencyId],
          },
        },
        update: {
          amount: { increment: amount },
        },
        create: {
          ownerId: receiver.id,
          currencyId: CurrencyType[currencyId],
          amount: amount,
        },
      }),
    ]);

    return { kind: 'OK', data: result };

  }
}