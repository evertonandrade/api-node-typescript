import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ClientesRepository from '../repositories/ClientesRepository';
import CreateClienteService from '../services/CreateClienteService';

const clientesRouter = Router();

clientesRouter.get('/todos', async (request, response) => {
  const clientesRepository = getCustomRepository(ClientesRepository);
  const clientes = await clientesRepository.find();

  return response.json(clientes);
});

clientesRouter.post('/', async (request, response) => {
  const { nome, endereco, email, dataDeCadastro } = request.body;

  const createCliente = new CreateClienteService();

  const cliente = await createCliente.execute({
    nome,
    endereco,
    email,
    dataDeCadastro,
  });

  return response.json(cliente);
});

export default clientesRouter;
