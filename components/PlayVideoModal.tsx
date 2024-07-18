
"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    
  } from "@/components/ui/dialog";


interface iAppProps {
title: string;
overview: string;
youtubeUrl: string;
changeState: any;
state: boolean;
age: number;
duration: number;
release: number

}

export default function PlayVideoModal({
  age,
  release,
  duration,
  changeState,
   overview,
   state,
   title,
   youtubeUrl}: iAppProps) {

    return(

<Dialog open={state} onOpenChange={() => changeState(!state)}>

<DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
  <DialogTitle>{title}</DialogTitle>
     <DialogDescription className="line-clamp-3">{overview}</DialogDescription>

<div className="flex gap-x-2 items-center">
   <p>{release}</p>
   <p className="border py-0.5 px-1">{age}+</p>
   <p>{duration}</p> 
</div>

</DialogHeader>
<iframe src={youtubeUrl} height={250} className="w-full"> </iframe>
</DialogContent>


</Dialog>


    )
}