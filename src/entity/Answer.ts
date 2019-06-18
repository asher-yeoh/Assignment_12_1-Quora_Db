import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Question } from "./Question";
import { User } from "./User";
import { AnswerVote } from "./AnswerVote";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(type => Question, question => question.answers)
    @JoinColumn({name: "question_id"})
    question: Question

    @ManyToOne(type => User, user => user.answers)
    @JoinColumn({name: "user_id"})
    user: User

    @OneToMany(type => AnswerVote, answerVote => answerVote.answer)
    answerVotes: AnswerVote[]

}