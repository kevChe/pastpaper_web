"use client"
import React, {useEffect, useState, useRef} from "react"
import clsx from 'clsx';

interface question_details {
    paper_no?: string;
    question_no?: string;
    question?: string;
    answer?: string;
}

export default function Card(question_details: question_details ){

    const {paper_no="0000", question_no="0", question="Question", answer="answer"} = question_details

    const [flip, setFlip] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null);
    const questionRef = useRef<HTMLDivElement>(null);
    const answerRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (cardRef.current && questionRef.current && answerRef.current && textareaRef.current) {
            const cardHeight = questionRef.current.scrollHeight;
            const textareaHeight = textareaRef.current.scrollHeight
            cardRef.current.style.height = `${cardHeight }px`;
            // questionRef.current.style.height = `${cardHeight + textareaHeight}px`;
            // answerRef.current.style.height = `${cardHeight + textareaHeight}px`;
            // questionRef.current.style.justifyContent = "space-between";
            // answerRef.current.style.justifyContent = "space-between";
            console.log(answerRef.current.style)
        }
    }, [cardRef, questionRef, answerRef]);

    const handleFlip = () => {
        setFlip(!flip)
    }
    
    const FlipButton = () =>{
        return(
            <button className=" text-black border-black border-2 w-1/3 rounded-full shadow-md py-1" onClick={handleFlip}>CLick to Reveal Answer</button>
        )
    }


    return(
        // <div className="group w-full [perspective:2000px] border-blue-600 border-2" style={{minHeight: 'fit-content'}}>
        //     <div className={clsx(
        //         "relative w-full flex justify-between border-black border-2 shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d]",
        //         {
        //             "[transform:rotateX(180deg)]": flip === true
        //         }
        //         )}
        //     >
        //         <div className="absolute h-fit inset-0 w-full [backface-visibility:hidden] p-4 border-red-500 border-2">
        //             <h1 className=" text-3xl text-black">{question}</h1>
        //             <FlipButton />
        //         </div>
        //         <div className="absolute h-fit inset-0 p-4 w-full rounded-xl bg-black/80 border-red-500 border-2 text-slate-200 [transform:rotateX(180deg)] [backface-visibility:hidden]">
        //             <h1 className="text-3xl font-bold text-white">{answer}</h1>
        //             <FlipButton />
        //         </div>
        //     </div>

        // </div>
        <div  className="group w-full [perspective:2000px] border-black border-2 p-4 rounded-xl shadow-2xl bg-white" style={{ minHeight: 'fit-content' }}>
            <div ref={cardRef} className={clsx(
                "relative w-full flex justify-between border-black border-2 shadow-lg rounded-xl transition-all duration-350 [transform-style:preserve-3d] mb-6 bg-slate-50",
                {
                    "[transform:rotateY(180deg)]": flip === true
                }
            )}>
                <div ref={questionRef} className="absolute inset-0 w-full [backface-visibility:hidden]" >
                    <div className="p-3"><h1 className=" text-2xl text-black">{question}</h1></div>
                    
                </div>
                <div ref={answerRef} className="absolute inset-0 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="p-3"><h1 className="text-2xl text-black h-fit">{answer}</h1></div>
                    
                </div>
            </div>
            <textarea ref={textareaRef} className="shadow-lg p-4 w-full border-2 border-black text-black  mb-6" rows={3}>  </textarea>
            <div className="w-full flex justify-center"><FlipButton /></div>
            
        </div>
    )
}


function question() {
    return(
        <div></div>
    )
}