import { DataSource } from 'typeorm';
import { Product } from './module/product/entities/product.entity';
import { Employee } from './module/employee/entities/employee.entity';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456', 
  database: 'product_management',
  entities: [Product, Employee],
  migrations: ['src/database/migrations/*.ts'], 
  synchronize: false,
});