import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddActorAndMovieTable1659532997488 implements MigrationInterface {
  name = 'AddActorAndMovieTable1659532997488';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "actors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year_of_birth" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d8608598c2c4f907a78de2ae461" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movies" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movies_actors" ("moviesId" integer NOT NULL, "actorsId" integer NOT NULL, CONSTRAINT "PK_737702849f658093632f35b622d" PRIMARY KEY ("moviesId", "actorsId"))`,
    );
    await queryRunner.query(`CREATE INDEX "IDX_d8b1b832dc2097cddfd6e9ef32" ON "movies_actors" ("moviesId") `);
    await queryRunner.query(`CREATE INDEX "IDX_7e36ac9a9ca0e920c39c4c7f45" ON "movies_actors" ("actorsId") `);
    await queryRunner.query(
      `ALTER TABLE "movies_actors" ADD CONSTRAINT "FK_d8b1b832dc2097cddfd6e9ef324" FOREIGN KEY ("moviesId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "movies_actors" ADD CONSTRAINT "FK_7e36ac9a9ca0e920c39c4c7f454" FOREIGN KEY ("actorsId") REFERENCES "actors"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "movies_actors" DROP CONSTRAINT "FK_7e36ac9a9ca0e920c39c4c7f454"`);
    await queryRunner.query(`ALTER TABLE "movies_actors" DROP CONSTRAINT "FK_d8b1b832dc2097cddfd6e9ef324"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_7e36ac9a9ca0e920c39c4c7f45"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_d8b1b832dc2097cddfd6e9ef32"`);
    await queryRunner.query(`DROP TABLE "movies_actors"`);
    await queryRunner.query(`DROP TABLE "movies"`);
    await queryRunner.query(`DROP TABLE "actors"`);
  }
}
