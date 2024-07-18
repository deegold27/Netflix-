"use client";

import Link from "next/link";
import Image from "next/image";
import Logo  from "../public/netflix_logo.svg"
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import UserNav from "../components/UserNav";
import { useState } from "react";
import SearchBar from "./SearchBar";



interface linkProps {
name: string;
href: string;
}
interface NavbarProps {
    session: any; // Replace with the correct type for your session object
  }
  


const links : linkProps[] =[

{name: 'Home', href : '/home'},

{name: 'Tv Shows', href : '/home/shows'},

{name: 'Movies', href : '/home/movies'},


{name: 'Live sports', href : '/home/live-sports'},

{name: 'Recently Added', href : '/home/recently'},

{name: 'My List', href : '/home/user/my-list'},
];
interface SearchResult {
    id: number;
    title: string;
    
    overview: string;
    movieId : number;
    watchList: boolean;
    watchListId: string;
     youtubeUrl: string;
     year: number;
     age: number;
     time: number;
     videoSource: string
    // Add other movie fields as needed
  }

export default function Navbar({ session }: NavbarProps){

    const [searchQuery, setSearchQuery] = useState('');

    const pathName = usePathname();

    const handleSearch = (searchTerm: string) => {
      // Implement your logic to handle the search
      console.log('Search term:', searchTerm);
      // You may want to navigate to the search results page here
    };

return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
        <div className="flex items-center">

            <Link href="/home"  className="w-32">
<Image src = {Logo} alt= "netflix logo" priority/>


            </Link>


            <ul className="lg:flex gap-x-4 ml-14 hidden">

{links.map((link,idx) => (
    <div key={idx}>
        {pathName === link.href ? (
              <li>
                <Link href={link.href} className="text-white font-semibold underline text-sm">
                 {link.name}
                   </Link> 
                          </li>
                            ):(
                                 <li>
        
                                <Link href={link.href} className="text-gay-300">
{link.name}
        </Link>
        </li>
)}
    </div>
))}

            </ul>
        </div>

<div className="flex items-center gap-x-8">

{/*<SearchBar onSearch={handleSearch} />*/}
  {/*      <Search className="w-5 h-5 text-gray-500 cursor-pointer" />*/}

      
<Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
<UserNav session={session}  />
    </div>
    </div>

    
)

}