import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEmployeesTable1714300000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
          { name: "name", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "phone", type: "varchar", isNullable: false },
          { name: "password", type: "varchar", isNullable: false },
          { name: "age", type: "int", isNullable: false },
          { name: "yearsOfWorking", type: "int", isNullable: false },
          { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP(6)" },
          { name: "updated_at", type: "timestamp", default: "CURRENT_TIMESTAMP(6)" },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
  }
}