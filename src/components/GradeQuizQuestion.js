import React from "react";


const GradeQuizQuestion = ({index, question}) => {
    //console.log(index, question)

    function remove_incorrect_json_data(string) {
        return string.toString().replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&eacute;/g, "")
    }


    return (
    <div className=" w-full h-auto pt-5 pb-5 rounded-md flex flex-col shadow-sm bg-slate-800/50 items-center">
        <h1 className="font-bold mb-2 text-xl md:text-2xl">{"question #"+Number(index+1)}</h1>
        <p className="pr-4 pl-4 text-sm mb-4 max-w-prose">{remove_incorrect_json_data(question['question'])}</p>
        {question['user_answer'] === question['correct_answer'] &&
            <h2 className=" text-green-500 md:text-lg mr-2 ml-2">Your Answer: {remove_incorrect_json_data(question.user_answer)}</h2>
        }
        {question['user_answer'] !== question['correct_answer'] &&
            <h2 className=" text-red-500 md:text-lg mr-4 ml-4 mb-2">Your Answer: {remove_incorrect_json_data(question.user_answer)}</h2>
        }
        <h3 className="text-sm md:text-lg mr-4 ml-4">Correct Answer: {remove_incorrect_json_data(question.correct_answer)}</h3>
    </div>
    )
}

export default GradeQuizQuestion