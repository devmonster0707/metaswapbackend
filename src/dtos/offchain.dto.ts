import { IsNotEmpty, IsString, IsNumber, IsInt, IsEnum } from 'class-validator';
import { CurrencyType } from '@prisma/client';

export class SendAmountByOffChainDto {
  @IsInt()
  @IsNotEmpty()
  public senderId: number;

  @IsString()
  @IsNotEmpty()
  public receiverAddress: string;

  @IsEnum(CurrencyType)
  public currencyId: CurrencyType;

  @IsNumber()
  @IsNotEmpty()
  public amount: number;
}