import { Router, Response, NextFunction, Request } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { RequestWithUser } from '@/interfaces/auth.interface';
import { OffChainController } from '@/controllers/offchain.controller';
import { AccountController } from '@/controllers/account.controller';

export class OffChainRoute implements Routes {
  public path = '/offchain';
  public router = Router();
  public offchain = new OffChainController();
  public user = new AccountController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // this.router.get(`${this.path}/getAddress`, AuthMiddleware(),(req: RequestWithUser, res, next) => {
      
    // })

    this.router.post(`${this.path}/saveAddress`, AuthMiddleware(),(req: Request, res, next) => {
      this.user.updateOffChainAddress(req, res, next).catch(next);
    });

    this.router.post(`${this.path}/send`, AuthMiddleware(),(req: RequestWithUser, res, next) => {
      this.offchain.send(req, res, next).catch(next);
    });
  }
}