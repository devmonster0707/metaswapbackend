import 'reflect-metadata';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import { config } from '@config';
import { Routes } from '@interfaces/routes.interface';
import { ErrorMiddleware } from '@middlewares/error.middleware';
import { logger, stream } from '@utils/logger';
import { AccountRoute } from './routes/account.route';
import path from 'node:path';

export class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = config.NODE_ENV;
    this.port = config.PORT;
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`=================================`);
      logger.info(`======= ENV: ${this.env} =======`);
      logger.info(`🚀 App listening on the port ${this.port}`);
      logger.info(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(morgan(config.LOG_FORMAT, { stream }));
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      }),
    );
    this.app.use(hpp());
    if (config.NODE_ENV !== 'development') {
      this.app.use(helmet());
    }
    0;
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use('/static', express.static(path.join(__dirname, '../public')));
    this.app.use('/static/flags', express.static(path.join(__dirname, '../node_modules/flag-icons/flags/4x3')));
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      // console.log(route.path);
      this.app.use(route.router);
    });
  }

  private initializeSwagger() {
    // const options = {
    //   swaggerDefinition: {
    //     info: {
    //       title: 'REST API',
    //       version: '1.0.0',
    //       description: 'Example docs',
    //     },
    //   },
    //   servers: [
    //     {
    //       url: 'http://localhost:3001',
    //       description: 'Local server',
    //     },
    //   ],
    //   apis: ['swagger.yaml'],
    // };

    // const specs = swaggerJSDoc(options);
    const swaggerDocument = YAML.load('./swagger.yaml');
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  private initializeErrorHandling() {
    this.app.use(ErrorMiddleware);
  }
}
