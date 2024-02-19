import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customers')
export class CustEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}