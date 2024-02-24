import Questions from "@/app/ui/questions"
import {getLocalData} from '@/app/lib/get_data';
import Search from "./ui/search";


export default async function Home() {
  // console.log(questions[0].Question)

  const question_details = await getLocalData();
  
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24 bg-slate-200 border-2 border-black">
        <Search />
        {/* <Suspense fallback="<div>Loading...</div>"> */}
                 <Questions question_details={question_details} />
        {/* </Suspense> */}
    </main>
  );
}
