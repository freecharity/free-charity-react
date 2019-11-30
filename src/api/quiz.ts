import axios from 'axios';
import {endpoint} from './__api';
import {Question} from '../models/question';
import {Answer} from '../models/answer';

export const getQuestions = (categoryName: string): Promise<Question[]> => {
    return new Promise<Question[]>((resolve, reject) => {
        axios.get(endpoint + `/quiz?categoryName=${categoryName}`).then((response) => {
            const questions: Question[] = response.data;
            resolve(questions);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const postAnswer = (question: Question, selectedAnswer: string): Promise<Answer> => {
    return new Promise<Answer>((resolve, reject) => {
        const answer: Answer = {
            answer_id: -1,
            answer: selectedAnswer,
            correct: question.answer === selectedAnswer ? 1 : 0,
            ip: 'unknown', // TODO: add user ip
            date_answered: new Date().toISOString(),
            question_id: question.question_id,
            user_id: 123, // TODO: get user id
        };
        axios.post(endpoint + `/quiz/`, {
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
