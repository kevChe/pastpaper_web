'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Search(){

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [query, setQuery] = useState("")

    // function handleSearch(term: string){
    //     const params = new URLSearchParams(searchParams);
    //     if(term){
    //         params.set('query', term);
    //     } else{
    //         params.delete('query');
    //     }
    //     replace(`${pathname}?${params.toString()}`);
    // }

    const handleKeyPress = (event: {key: any;}) => {
        if (event.key === "Enter") return handleSearch()
    }

    function handleSearch(){
        const params = new URLSearchParams(searchParams);
        if(query){
            params.set('query', query);
        } else{
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }

    return(
        <div className="relative flex flex-1 flex-shrink-0 w-full max-w-5xl mb-10">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-black"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
                setQuery(e.target.value);
            }}
            onKeyDown={handleKeyPress}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    )
}