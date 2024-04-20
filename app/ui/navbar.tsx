'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
export default function Navbar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const subjects = [
        {name: "ict"},
        {name: "cs"},
        {name: "cs2"}
    ]

    function handleClick(subject: string){
        const params = new URLSearchParams(searchParams);
        params.set('subject', subject)
        replace(`${pathname}?${params.toString()}`);
    }

    return(
        <div className="flex flex-row w-full mb-5 ">
            {
                subjects.map((subject) => {
                    return(
                        <button 
                        className="flex flex-1 border-2 border-black text-black justify-center "
                        onClick={() => handleClick(subject.name)}
                        key={subject.name}
                        >
                            {subject.name}
                        </button>
                    )
                })
            }
        </div>
    )
}