import 'reflect-metadata';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import AppError from './errors/AppError';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';
import './database';

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0'

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(PORT, HOST, () => {
  console.log('Server online');
});
