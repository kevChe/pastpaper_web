import { getLocalData } from "../lib/get_data";
import FlipCard from "@/app/ui/flipcard";

interface QuestionDetail {
    Paper_No: string;
    Question_No?: number;
    Question: string;
    Marks?: number[];
    Answer: string;
    Key: number;
}

export default async function Questions({ query, subject}: { query: String; subject:String}) {
    console.log("LOAD")
    const question_details = await getLocalData(subject);
    const filterValue = query

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
    return (
        <div className='flex flex-col gap-12 z-10 w-full items-center justify-between font-mono text-sm lg:flex' >
            {
                filteredData.map((question_detail: QuestionDetail) => {
                return(
                    <div className='w-full' key={question_detail.Key}>
                        <FlipCard question_detail={question_detail} subject={subject}/>
                    </div>
                )
                })
            }
          </div>
    )
}