export default interface Question {
    id: string;
    question: string;
    correctAnswer: string;
    incorrectAnswer1: string;
    incorrectAnswer2: string;
    incorrectAnswer3: string;
    difficulty: string;
    category: string;
}