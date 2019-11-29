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

export const testQuestion: Question = {
    question_id: 1,
    question: "This is a test question?",
    answer: 'The quizAnswer',
    incorrect_1: "Incorrect 1",
    incorrect_2: "Incorrect 2",
    incorrect_3: "Incorrect 3",
    deleted: 0,
    category_id: 1,
    category_name: "General"
};

export const testQuestion2: Question = {
    question_id: 2,
    question: "This is a second test question?",
    answer: 'The quizAnswer part 2',
    incorrect_1: "Incorrect 1",
    incorrect_2: "Incorrect 2",
    incorrect_3: "Incorrect 3",
    deleted: 0,
    category_id: 1,
    category_name: "General"
};
