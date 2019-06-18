import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class QuestionVote {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vote_value: number;

    @ManyToOne(type => Question, question => question.questionVotes)
    @JoinColumn({name: "question_id"})
    question: Question

    @ManyToOne(type => User, user => user.questionVotes)
    @JoinColumn({name: "user_id"})
    user: User

}