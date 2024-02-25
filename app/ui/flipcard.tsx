"use client"
import React, {useEffect, useState, useRef} from "react"
import clsx from 'clsx';

interface QuestionDetail {
    Paper_No: string;
    Question_No?: number;
    Question: string;
    Marks?: number[];
    Answer: string;
}

export default function Card(question_details: QuestionDetail ){

    const {Paper_No="0000", Question="Question", Answer="answer", Question_No} = question_details

    const [flip, setFlip] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null);
    const questionRef = useRef<HTMLDivElement>(null);
    const answerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (cardRef.current && questionRef.current && answerRef.current && textareaRef.current) {
            
            const cardHeight = Math.max(questionRef.current.scrollHeight, answerRef.current.scrollHeight);
            cardRef.current.style.height = `${cardHeight }px`;
        }
    }, [cardRef, questionRef, answerRef, question_details]);

    const handleFlip = () => {
        setFlip(!flip)
    }
    
    const FlipButton = () =>{
        return(
            <button className=" text-black border-black border-2 w-full md:w-1/3 rounded-full shadow-md py-1" onClick={handleFlip}>CLick to Reveal Answer</button>
        )
    }

    // console.log(question)
    return(
        <div  className="group w-full [perspective:2000px] border-black border-2 p-4 rounded-xl shadow-2xl bg-white" style={{ minHeight: 'fit-content' }}>
            <div className="w-full p-3">
                <h1>{Paper_No.slice(0, -4)} Question Number: {Question_No}</h1>
            </div>
            <div ref={cardRef} className={clsx(
                "relative w-full flex justify-between border-black border-2 shadow-lg rounded-xl transition-all duration-350 [transform-style:preserve-3d] mb-6 bg-slate-50",
                {
                    "[transform:rotateY(180deg)]": flip === true
                }
            )}>
                <div ref={questionRef} className="absolute inset-0 rounded-xl w-full [backface-visibility:hidden]" >
                    <div className="p-3"><p style={{whiteSpace: "pre-line"}} className=" ">{Question}</p></div>
                    
                </div>
                <div ref={answerRef} className="absolute inset-0 w-full rounded-xl bg-slate-100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="p-3"><p style={{whiteSpace: "pre-line"}} className=" h-fit">{Answer}</p></div>
                    
                </div>
            </div>
            <textarea ref={textareaRef} className="shadow-lg p-4 w-full border-2 border-black text-black  mb-6" rows={3} /> 
            <div className="w-full flex justify-center"><FlipButton /></div>
            
        </div>
    )
}
