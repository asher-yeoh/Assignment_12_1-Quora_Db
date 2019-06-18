import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";

@Entity()
export class AnswerVote {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    vote_value: number;

    @ManyToOne(type => Answer, answer => answer.answerVotes)
    @JoinColumn({name: "answer_id"})
    answer: Answer

    @ManyToOne(type => User, user => user.answerVotes)
    @JoinColumn({name: "user_id"})
    user: User

}