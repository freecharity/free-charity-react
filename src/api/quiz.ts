import axios from 'axios';
import {baseUrl} from './__api';
import {Question} from '../models/question';
import {Answer} from '../models/answer';
import {User} from '../models/user';
import {getUserByUsername} from './user';

export const getQuestions = (categoryName: string): Promise<Question[]> => {
    return new Promise<Question[]>((resolve, reject) => {
        axios.get(baseUrl + `/quiz?categoryName=${categoryName}`).then((response) => {
            const questions: Question[] = response.data;
            resolve(questions);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const postAnswer = (question: Question, selectedAnswer: string, user: User): Promise<Answer> => {
    return new Promise<Answer>(async (resolve, reject) => {
        let userId = 0; // TODO: make this lookup default account
        if (user != undefined) {
            userId = user.user_id;
        } else {
            // TODO: Cache this id to prevent calling this method too many times
            await getUserByUsername('freecharity').then((user: User) => {
                userId = user.user_id;
            });
        }
        const answer: Answer = {
            answer_id: -1,
            answer: selectedAnswer,
            correct: question.answer === selectedAnswer ? 1 : 0,
            ip: 'unknown', // TODO: add user ip
            date_answered: new Date().toISOString(),
            question_id: question.question_id,
            user_id: userId,
        };
        axios.post(baseUrl + `/quiz/`, {
            question: question,
            answer: answer
        }).then((response) => {
            const a: Answer = response.data;
            resolve(a);
        }).catch((error) => {
            reject(error);
        });
    });
};
