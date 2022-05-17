import React from "react";
import '../styles.css'


const QuizMainPage = () => { 



    return (
        <div className="w-screen h-16 bg-slate-800 flex items-center">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 className=" text-slate-50 lg:text-4xl lg:pl-8 md:pl-8 pl-4 italic md:text-4xl text-2xl " >LaunchCode Quiz</h1>
            <a className=" ml-auto lg:pr-8 md:pr-8 pr-4" href="https://github.com/jediknight813">
                <i className="fa fa-github" style={{"fontSize": "36px", color: "white"}}></i>
            </a>
        </div>
    )   
}


export default QuizMainPage