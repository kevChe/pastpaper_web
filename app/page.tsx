import Questions from "@/app/ui/questions"
import {getLocalData} from '@/app/lib/get_data';
import Search from "./ui/search";
import { Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import Navbar from "./ui/navbar";
import { useSearchParams } from "next/navigation";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    subject?: string;
  };
}) {
  // console.log(questions[0].Question)
  // const searchParams = useSearchParams();
  const query = searchParams?.query || ""
  const subject = searchParams?.subject || "ict"
  
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between p-10 md:p-12 bg-slate-200 border-2 border-black">
      <div className="max-w-5xl w-full">
        <Navbar />
        <Suspense fallback= {<PacmanLoader/>}>
          <Search />
        </Suspense>
        <Suspense fallback="">
          <Questions query={query} subject={subject}/>
        </Suspense>
      </div>
    </main>
  );
}
