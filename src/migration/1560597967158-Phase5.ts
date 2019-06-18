import {MigrationInterface, QueryRunner} from "typeorm";

export class Phase51560597967158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "question_vote" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "question_id" int, "user_id" int, CONSTRAINT "PK_c7ec92f42a1481d3d45b800b67d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer_vote" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "answer_id" int, "user_id" int, CONSTRAINT "PK_6fd2d6e010d3f5f3d171de27460" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "question_vote" ADD CONSTRAINT "FK_ab338c142f2cec2789d3cd41ad1" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_vote" ADD CONSTRAINT "FK_a0c0edc94c4c070c6c9a5a22037" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_vote" ADD CONSTRAINT "FK_6a7457df9ed5c23e9e7cbef1ec6" FOREIGN KEY ("answer_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_vote" ADD CONSTRAINT "FK_8d2d92c0720f744f2eed6f80dbf" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer_vote" DROP CONSTRAINT "FK_8d2d92c0720f744f2eed6f80dbf"`);
        await queryRunner.query(`ALTER TABLE "answer_vote" DROP CONSTRAINT "FK_6a7457df9ed5c23e9e7cbef1ec6"`);
        await queryRunner.query(`ALTER TABLE "question_vote" DROP CONSTRAINT "FK_a0c0edc94c4c070c6c9a5a22037"`);
        await queryRunner.query(`ALTER TABLE "question_vote" DROP CONSTRAINT "FK_ab338c142f2cec2789d3cd41ad1"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`DROP TABLE "answer_vote"`);
        await queryRunner.query(`DROP TABLE "question_vote"`);
    }

}
