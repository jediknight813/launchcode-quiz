import React from "react";
import '../styles.css'


const Header = ({return_to_quizzes_page}) => {


    return(
        <div className="w-full h-16 bg-slate-800 flex items-center drop-shadow-2xl">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1 onClick={() => return_to_quizzes_page()} className=" text-slate-50 lg:text-4xl cursor-pointer lg:pl-8 md:pl-8 pl-4 font-mono md:text-4xl text-lg" >LaunchCode Quiz</h1>
            <a className=" ml-auto lg:pr-8 md:pr-8 pr-4" href="https://github.com/jediknight813">
                <i className="fa fa-github" style={{"fontSize": "36px", color: "white"}}></i>
            </a>
        </div>
    )
}


export default Header
