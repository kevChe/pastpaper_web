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
    useEffect(() => {
        if (cardRef.current) {
            const cardHeight = cardRef.current.scrollHeight;
            cardRef.current.style.height = `${cardHeight}px`;
        }
    });

    const handleFlip = () => {
        setFlip(!flip)
    }
    
    const FlipButton = () =>{
        return(
            <button className="text-black border- flex-1 border-black" onClick={handleFlip}>CLick</button>
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
        <div ref={cardRef} className="group w-full [perspective:2000px] border-blue-600 border-2" style={{ minHeight: 'fit-content' }}>
            <div className={clsx(
                "relative w-full flex justify-between border-black border-2 shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d]",
                {
                    "[transform:rotateY(180deg)]": flip === true
                }
            )}>
                <div className="absolute h-fit inset-0 w-full [backface-visibility:hidden] p-4 border-red-500 border-2">
                    <h1 className=" text-3xl text-black">{question}</h1>
                    <FlipButton />
                </div>
                <div className="absolute h-fit inset-0 p-4 w-full rounded-xl bg-black/80 border-red-500 border-2 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <h1 className="text-3xl font-bold text-white h-fit">{answer}</h1>
                    <FlipButton />
                </div>
            </div>
        </div>
    )
}


function question() {
    return(
        <div></div>
    )
}