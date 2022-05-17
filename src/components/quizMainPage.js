import React, { useState } from "react";
import '../styles.css'
import Header from "./Header";


const QuizMainPage = () => { 
    const [SelectQuizState, setSelectQuizState] = useState(true)
    const [AnswerQuizState, setAnswerQuizState] = useState(false)
    const [GradeQuizState, setGradeQuizState] = useState(false)
    const launch_code_quiz = require('../quizzes/LaunchCodeQuiz.json');
    const quizzes = [launch_code_quiz, launch_code_quiz, launch_code_quiz]

    return (
        <div className=" bg-slate-600 w-screen h-screen min-h-max flex items-center justify-center font-mono">
            <Header />
            {SelectQuizState &&
                <div className="w-full md:w-[800px] h-auto min-h-[80%] rounded-sm shadow-lg mt-16 bg-slate-700 text-slate-50 flex flex-col gap-6">
                    <h1 className=" text-2xl pt-8 pb-2 self-center">Select Quiz</h1>
                    {quizzes.map(quiz => <button className="bg-slate-800 md:rounded-full md:w-[90%] md:self-center hover:bg-slate-800/80 h-10 shadow-lg cursor-pointer" key={quiz.name}>{quiz.name}</button>)}
                </div>
            }
            {AnswerQuizState &&
                <div>
                    answer quiz
                </div>
            }
            {GradeQuizState &&
                <div>
                    grade quiz
                </div>
            }

        </div>
    )   
}


export default QuizMainPage
