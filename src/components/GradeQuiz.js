import React from "react";
import '../styles.css'
import GradeQuizQuestion from "./GradeQuizQuestion";


const GradeQuiz = ({quiz,  return_to_quizzes_page}) => {
    //console.log(return_to_quizzes_page)

    //user['grade']/quiz.length) * 100 + "%" 

    function CheckUserAnswers() { 
        let user_answers_correct = 0
        quiz['results'].forEach(element => {
            if (element['user_answer'] === element['correct_answer']) {
                user_answers_correct += 1 
            }
        })
        return user_answers_correct
    }


    return (
        <div className="w-full md:w-[800px] mb-20 pb-10 rounded-sm h-auto min-h-[450px] bg-slate-700/50 mt-16 shadow-lg text-white flex flex-col items-center gap-8">
            <h1 className="font-bold text-xl md:text-2xl mt-4">{quiz.name+" Results"}</h1>
            {quiz['results'].map((question, index) => 
                <GradeQuizQuestion key={index} index={index} question={question}/>
            )}
            <h2 className="text-bold md:text-2xl text-lg">Overall Score: {(CheckUserAnswers()/quiz['results'].length) * 100 + "%" } </h2>
            <h3 className="text-bold md:text-lg">({CheckUserAnswers() + " of " + quiz['results'].length + " questions correct"})</h3>
            <button onClick={() => return_to_quizzes_page()} className=" bg-blue-500 p-2 pr-3 hover:bg-blue-500/90 pl-3 rounded-full"> Return </button>
        </div>
    )
}


export default GradeQuiz

