import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TenantNest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  schema_name : string;


  @Column()
  is_active: Boolean;


}