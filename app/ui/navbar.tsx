'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
export default function Navbar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const subjects = [
        {name: "ICT"},
        {name: "CS"}
    ]

    function handleClick(subject: string){
        const params = new URLSearchParams(searchParams);
        params.set('subject', subject)
        replace(`${pathname}?${params.toString()}`);
    }

    return(
        <div className="flex flex-row w-full">
            {
                subjects.map((subject) => {
                    return(
                        <button 
                        className="flex flex-1 border-2 border-black text-black"
                        onClick={() => handleClick(subject.name)}
                        >
                            {subject.name}
                        </button>
                    )
                })
            }
        </div>
    )
}