import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitActors1659535655030 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO actors (id, name, year_of_birth)
            VALUES (1,'Robert De Niro',1943),
                   (2,'Jack Nicholson',1944),
                   (3,'Sidney Poitier',1949);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE actors RESTART IDENTITY;`);
  }
}
