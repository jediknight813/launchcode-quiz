import React, { useState } from "react";


const Quiz = ({quiz, quiz_results}) => {
    const [questionIndex, setQuestionIndex] = useState(0)


    function shuffle_and_add_answer_to_choices() {
        quiz['results'].forEach(e =>{
            if (!e['incorrect_answers'].includes(e['correct_answer'])) {
                e['incorrect_answers'].push(e['correct_answer'])
                e['incorrect_answers'].sort( ()=>Math.random()-0.5)
            }
            //console.log(e)
        })
    }

    function next_question(user_answer) {
        quiz['results'][questionIndex]['user_answer'] = user_answer
        if (quiz['results'][questionIndex+1] !== undefined) {
            setTimeout(() => { setQuestionIndex(questionIndex+1) }, "200")
        }
        else {
            quiz_results(quiz)
        }
    }

    shuffle_and_add_answer_to_choices()

    return (
        <div className="w-full md:w-[800px] pb-10 h-auto min-h-[450px] bg-slate-700 mt-16 text-white flex flex-col items-center gap-4">
            <h1 className=" text-2xl mt-6 mb-2 font-bold">Question #{questionIndex+1}</h1>
            <p className="pr-4 pl-4 text-sm font-bold mb-4">{quiz['results'][questionIndex]['question'].replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&eacute;/g, "")}</p>
            {quiz['results'][questionIndex]['incorrect_answers'].map((choice) => (
                    <button key={choice} onClick={() => next_question(choice)} className="bg-slate-800 w-full min-h-[55px] h-auto  hover:bg-slate-800/80 md:rounded-full md:w-[90%] md:self-center shadow-md">{choice.replace(/&quot;/g, "'").replace(/&#039;/g, "'").replace(/&eacute;/g, "" )}</button>
                 ))}
        </div>
    )
}


export default Quiz

