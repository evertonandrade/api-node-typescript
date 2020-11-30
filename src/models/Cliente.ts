import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clientes')
class Cliente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  endereco: string;

  @Column()
  email: string;

  @Column('timestamp with time zone')
  dataDeCadastro: Date;
}

export default Cliente;
