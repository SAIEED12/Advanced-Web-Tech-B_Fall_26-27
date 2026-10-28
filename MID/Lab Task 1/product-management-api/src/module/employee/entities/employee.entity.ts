import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column('int')
  age: number;

  @Column('int')
  yearsOfWorking: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}