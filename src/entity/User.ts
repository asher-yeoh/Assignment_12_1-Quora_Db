import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { QuestionVote } from "./QuestionVote";
import { AnswerVote } from "./AnswerVote";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Question, question => question.user)
    questions: Question[]

    @OneToMany(type => Answer, answer => answer.user)
    answers: Answer[]

    @OneToMany(type => QuestionVote, questionVote => questionVote.user)
    questionVotes: QuestionVote[]

    @OneToMany(type => AnswerVote, answerVote => answerVote.user)
    answerVotes: AnswerVote[]

}
