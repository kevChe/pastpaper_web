"use client"

import FlipCard from "@/app/ui/flipcard";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

interface QuestionDetail {
    Paper_No: string;
    Question_No?: number;
    Question: string;
    Marks?: number[];
    Answer: string;
    Key: number;
}

export default function Questions({question_details}: {question_details: QuestionDetail[]}) {

    const [filteredData, setFilteredData] = useState<QuestionDetail[]>(question_details)
    const searchParams = useSearchParams();
    const filterValue = searchParams.get("query") || ""

    useEffect(() => {


        const updateFilteredData = question_details.filter(function(item: QuestionDetail) {
            // Convert all property values of the current item to lowercase strings
            var lowercaseValues = Object.values(item).map(function(value) {
                return String(value).toLowerCase();
            });
        
            // Check if the filterValue exists in any of the lowercase property values
            return lowercaseValues.some(function(value) {
                return value.includes(filterValue.toLowerCase());
            });
        });

        setFilteredData(updateFilteredData);
        console.log(filterValue)
    }, [filterValue, question_details])






    return (
        <div className='flex flex-col gap-12 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex' >
            {
                filteredData.map((question_detail: QuestionDetail) => {
                const {Paper_No, Question, Answer, Key, Question_No} = question_detail
                return(
                    <div className='w-full' key={Key}>
                        <FlipCard Question={Question} Answer={Answer} Paper_No={Paper_No} Question_No={Question_No}/>
                    </div>
                )
                })
            }
          </div>
    )
}