import Image from "next/image";
import FlipCard from "./ui/flipcard";
import Questions from "@/app/ui/questions"
import {getLocalData} from '@/app/lib/get_data';
import Search from "./ui/search";


export default async function Home() {
  // console.log(questions[0].Question)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200">
        <Search />
        <Questions />
    </main>
  );
}
