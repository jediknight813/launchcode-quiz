import React, { useState } from "react";
import '../styles.css'
import Header from "./Header";
import Quiz from "./Quiz";
import GradeQuiz from "./GradeQuiz";


const QuizMainPage = () => { 
    const [SelectQuizState, setSelectQuizState] = useState(true)
    const [AnswerQuizState, setAnswerQuizState] = useState(false)
    const [GradeQuizState, setGradeQuizState] = useState(false)
    const [current_quiz, setCurrentQuiz] = useState(undefined)
    const launch_code_quiz = require('../quizzes/LaunchCodeQuiz.json');
    const quizzes = [launch_code_quiz]


    function return_to_quizzes_page() { 
        setGradeQuizState(false)
        setAnswerQuizState(false)
        setSelectQuizState(true)
    }


    function quiz_results(quiz){
        if (quiz?.type === "quiz") {
            setCurrentQuiz(quiz)
            setSelectQuizState(false)
            setAnswerQuizState(false)
            setGradeQuizState(true)
        }
    }

    function quiz_selected(quiz) {
        setCurrentQuiz(quiz)
        setGradeQuizState(false)
        setSelectQuizState(false)
        setAnswerQuizState(true)
    }


    return (
        <div className="bg-slate-600 overflow-x-hidden max-w-screen h-auto min-h-screen flex flex-col items-center font-mono">
            <Header />
            {SelectQuizState &&
                <div className="w-full md:w-[800px] h-auto min-h-[300px] rounded-sm shadow-lg mt-16 bg-slate-700 text-slate-50 flex flex-col gap-6">
                    <h1 className=" text-2xl pt-8 pb-2 self-center">Select Quiz</h1>
                    {quizzes.map(quiz => <button onClick={() => quiz_selected(quiz)} className="bg-slate-800 md:rounded-full md:w-[90%] md:self-center hover:bg-slate-800/80 h-10 shadow-lg cursor-pointer" key={quiz.name}>{quiz.name}</button>)}
                </div>
            }
            {AnswerQuizState &&
                <Quiz quiz={current_quiz} quiz_results={quiz_results} />
            }
            {GradeQuizState &&
                <GradeQuiz quiz={current_quiz} return_to_quizzes_page={return_to_quizzes_page}/>
            }
        </div>
    )   
}


export default QuizMainPage
