import Questions from "@/app/ui/questions"
import {getLocalData} from '@/app/lib/get_data';
import Search from "./ui/search";
import { Suspense } from "react";


export default async function Page() {
  // console.log(questions[0].Question)

  const question_details = await getLocalData();
  
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-24 bg-slate-200 border-2 border-black">
        <Suspense fallback="<div>Loading...</div>">
          <Search />
        </Suspense>
        <Suspense fallback="<div>Loading...</div>">
                 <Questions question_details={question_details} />
        </Suspense>
    </main>
  );
}
