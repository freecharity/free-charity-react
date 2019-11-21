import React, {useEffect, useState} from 'react';
import {Question} from "models/question";
import QuizAnswer from "./quizAnswer";

interface CurrentQuestionProps {
    questions: Question[];
    postAnswer: any;
}

export default function QuizQuestion(props: CurrentQuestionProps) {
    const [questions, setQuestions] = useState<Question[]>(props.questions);
    const [answers, setAnswers] = useState<string[]>([]);
    const [locked, setLocked] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (questions.length > 0) {
            loadQuestion();
        }
    }, [questions]);

    const loadQuestion = () => {
        setAnswers(shuffleAnswers(compileAnswers(questions[0])));
        setLocked(false);
    };

    const compileAnswers = (question: Question) => {
        return [question.answer, question.incorrect_1, question.incorrect_2, question.incorrect_3];
    };

    const shuffleAnswers = (answers: string[]) => {
        let j, x, i;
        for (i = answers.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = answers[i];
            answers[i] = answers[j];
            answers[j] = x;
        }
        return answers;
    };

    const answerIsCorrect = (answer: string) => {
        return questions[0].answer === answer;
    };

    const postAnswer = (answer: string) => {
        props.postAnswer(answer, questions[0]);
        selectNextQuestion();
    };

    const selectNextQuestion = () => {
        const arr: Question[] = questions.slice(1);
        arr.push(questions[0]);
        setQuestions(arr);
        setLocked(false);
    };

    return (
        <div className="current-question_container">
            <div className="current-question_inner">
                {questions[0] != undefined ? <div className="question">
                    <h1 className="text-center">{questions[0].question}</h1>
                    <div className="answers">
                        {answers.map((a, i) => {
                            return <QuizAnswer key={i}
                                               id={i}
                                               answer={a}
                                               correct={answerIsCorrect(a)}
                                               locked={locked}
                                               loading={loading}
                                               setLocked={setLocked}
                                               submitAnswer={postAnswer}
                            />
                        })}
                    </div>
                </div> : ''}
            </div>
        </div>
    )
}