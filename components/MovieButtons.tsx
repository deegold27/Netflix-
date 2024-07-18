"use client"

import { InfoIcon, PlayCircle } from "lucide-react"
import { Button } from "./ui/button"
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";
import Watch from "../app/watch/page";
import { Dialog } from "@radix-ui/react-dialog";
import Link from "next/link";


interface iAppProps{
overview : string;
youtubeUrl: string;
id: number;
releaseDate:number;
duration: number;
title:string;
age: number;
videoSource: string;

}

export default function MovieButtons({videoSource,overview,youtubeUrl,id,releaseDate,title,duration, age,} : iAppProps){
const [open,setOpen] = useState(false);
const watchLink = `/watch?videoSource=${encodeURIComponent(videoSource)}&title=${encodeURIComponent(title)}`;



    return (
        <>
      <a href={watchLink}  > 
        <Button   className="text-lg font-medium">
          
            <PlayCircle className="mr-2 h-6 w-6" /> Play
        
        </Button>
       </a> 
   
        <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
            <InfoIcon className="mr-2 h-6 w-6" /> More Info
        </Button>
        
        <PlayVideoModal  state={open} key={id} changeState={setOpen} title={title} overview={overview} youtubeUrl={youtubeUrl} age={age} duration={duration} release={releaseDate} /> 
     
     
        </>
       
    ) 
}