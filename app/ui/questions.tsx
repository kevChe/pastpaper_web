"use client"

import {getLocalData} from '@/app/lib/get_data';
import FlipCard from "@/app/ui/flipcard";
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface QuestionDetail {
    Paper_No: string;
    "Question Number": number;
    Question: string;
    Marks: number[];
    Paper_no: string;
    Answers: string;
}

export default async function questions({question_details}: {question_details: QuestionDetail[]}) {

    const searchParams = useSearchParams();

    const filterValue = searchParams.get("query") || ""

    const filteredData = question_details.filter(function(item: QuestionDetail) {
        // Convert all property values of the current item to lowercase strings
        var lowercaseValues = Object.values(item).map(function(value) {
            return String(value).toLowerCase();
        });
    
        // Check if the filterValue exists in any of the lowercase property values
        return lowercaseValues.some(function(value) {
            return value.includes(filterValue.toLowerCase());
        });
    });
    // console.log(filteredData)

    return (
        <div className='flex flex-col gap-12 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex' >
            {
                filteredData.map((question_detail: QuestionDetail) => {
                const {Paper_No, Question, Answers} = question_detail
                // console.log(question_detail)
                return(
                    <div className='w-full' key={Question}>
                        <FlipCard question={Question} answer={Answers} />
                    </div>
                )
                })
            }
          </div>
    )
}