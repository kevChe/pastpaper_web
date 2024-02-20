import {getLocalData} from '@/app/lib/get_data';
import FlipCard from "@/app/ui/flipcard";

interface question_details {
    Paper_No?: string;
    Question_No?: string;
    Question?: string;
    Answers?: string;
  }

export default async function questions(filter: String) {
    const question_details = await getLocalData();

    const filterValue = "w20"
    const filteredData = question_details.filter(function(item) {
        // Convert all property values of the current item to lowercase strings
        var lowercaseValues = Object.values(item).map(function(value) {
            return String(value).toLowerCase();
        });
    
        // Check if the filterValue exists in any of the lowercase property values
        return lowercaseValues.some(function(value) {
            return value.includes(filterValue.toLowerCase());
        });
    });
    console.log(filteredData)

    return (
        <div className='flex flex-col gap-12 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex' >
            {
                filteredData.map((question_detail: question_details) => {
                const {Paper_No, Question_No, Question, Answers} = question_detail
                // console.log(question_detail)
                return(
                    <div className='w-full'>
                        <FlipCard question={Question} answer={Answers} />
                    </div>
                )
                })
            }
          </div>
    )
}