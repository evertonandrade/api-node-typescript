import { Repository, EntityRepository } from 'typeorm';

import Cliente from '../models/Cliente';

@EntityRepository(Cliente)
class ClientesRepository extends Repository<Cliente> {

  public async findByDate(date: Date): Promise<Cliente | null> {
    const findCliente = await this.findOne({
      where: { date },
    });
    return findCliente || null;
  }

}

export default ClientesRepository;
