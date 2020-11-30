import { Router } from 'express';

import clientesRouter from './cliente.routes';

const routes = Router();

routes.use('/cliente', clientesRouter);

export default routes;

