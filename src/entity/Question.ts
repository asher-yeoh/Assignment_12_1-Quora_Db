import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";
import { QuestionVote } from "./QuestionVote";

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(type => Answer, answer => answer.question)
    answers: Answer[]

    @ManyToOne(type => User, user => user.questions)
    @JoinColumn({name: "user_id"})
    user: User

    @OneToMany(type => QuestionVote, questionVote => questionVote.question)
    questionVotes: QuestionVote[]

}