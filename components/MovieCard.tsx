"use client";


import { Heart, PlayCircle, Info  } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PlayVideoModal from "./PlayVideoModal";
import { addToWatchList, deletefromWatchlist } from "@/app/action";
import { usePathname, useRouter } from "next/navigation";

import Watch from "../app/watch/page";
import { watch } from "fs";


interface iAppProps {
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
}
 //

export function MovieCard ({
    age,
    time,
    year,
    movieId,
    overview,
    title,
    watchList,
    watchListId,
    videoSource,
    youtubeUrl,
}: iAppProps) {

const [open,setOpen] = useState(false);
const pathName = usePathname();
const watchLinkMovieCard = `/watch?videoSource=${encodeURIComponent(videoSource)}`;
const router = useRouter();

const handlePlayClick = () => {
  // Use Next.js Link to navigate to Watch.tsx with the specific videoSource
  router.push(`/watch?videoSource=${encodeURIComponent(videoSource)}&title=${encodeURIComponent(title)}`);
};

return (
   <>
  
   <button onClick={handlePlayClick} className="-mt-14" > {/**/ }
   
<PlayCircle className="h-20 w-20" />
 
   </button>
  
   
<div className="right-5 top-5 absolute z-10 mb-2">

   
    {watchList ? (<form action={deletefromWatchlist}>
        <input type="hidden" name="watchlistId" value={watchListId} />
       <input type="hidden" name="pathname" value={pathName} />
       
        <Button variant="outline" size="icon">
            <Heart className="w-4 h-4 text-red-500" />
        </Button>
    </form>    
    ) : (
<form action={addToWatchList}>
    <input type="hidden" name="movieId" value={movieId} />
       <input type="hidden" name="pathName" value={pathName} />
       
         <Button variant="outline" size="icon">
        <Heart className="w-4 h-4" />
    </Button>
</form>
    )
}
{/*<button className="-mt-14" onClick={() => setOpen(true)}>*/}
<Button onClick={() => setOpen(true)} variant="outline"  size="icon">
            <Info className="w-4 h-4" />
        </Button>
        {/*</button>*/}

</div>


<div  className="p-5 absolute bottom-0 left-0">

   
<h1 className="font-bold text-lg line-clamp-1"> {title}</h1>
 <div className="flex gap-x-2 item-center">

<p className="font-normal text-sm">{year}  </p>
<p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">{age} + </p>
 <p className="font-normal text-sm"> {time}</p> 
 </div>


<p className="line-clamp-1 text-gray-200 font-light">{overview}</p>
</div>


<PlayVideoModal 

youtubeUrl={youtubeUrl}
 key={movieId}
title={title}
overview={overview}
state={open}
        changeState={setOpen}
age={age}
duration={time}
release={year}


/>



   </>
)

}