export interface Question {
    question_id: number;
    question: string;
    answer: string;
    incorrect_1: string;
    incorrect_2: string;
    incorrect_3: string;
    category_id: number;
    category_name: string;
    deleted: number;
}

export const initialState = {
    question_id: -1,
    question: "",
    answer: "",
    deleted: 0,
    incorrect_1: "",
    incorrect_2: "",
    incorrect_3: "",
    category_id: -1,
    category_name: ""
};