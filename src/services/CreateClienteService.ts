import { getCustomRepository } from 'typeorm';

import Cliente from '../models/Cliente';
import ClientesRepository from '../repositories/ClientesRepository';

interface Request {
  nome: string;
  endereco: string;
  email: string;
  dataDeCadastro: Date;
}

class CreateClienteService {

  public async execute({ nome, endereco, email, dataDeCadastro, }: Request): Promise<Cliente> {
    const clientesRepository = getCustomRepository(ClientesRepository);

    const cliente = clientesRepository.create({
      nome,
      endereco,
      email,
      dataDeCadastro,
    })

    await clientesRepository.save(cliente);

    return cliente;
  }
}

export default CreateClienteService;
