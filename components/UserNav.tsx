"use client";
import {DropdownMenuItem,DropdownMenuLabel , DropdownMenuTrigger, DropdownMenu, DropdownMenuContent} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";
//import { getServerSession } from "next-auth";
//import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
//import { useSession } from "next-auth/react"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

interface UserNavProps {
    session: any; // Replace with the correct type for your session object
  }

export default async  function UserNav({ session }: UserNavProps){
    
//const Session = await getServerSession(authOptions);
    //data?.user?.name
 
    
  return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
<Avatar className="h-10 w-10 rounded-sm">
    <AvatarImage src="https://gukkxkfyqjopjwthhpmx.supabase.co/storage/v1/object/sign/user%20imag/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyIGltYWcvYXZhdGFyLnBuZyIsImlhdCI6MTcwMzM2ODE1MCwiZXhwIjoxNzM0OTA0MTUwfQ.kVljr_1-zmigHBMLIgOq8DzGwSBWLqXIgMetwjg9FfE&t=2023-12-23T21%3A49%3A11.019Z" />
    <AvatarFallback className="rounded-sm"></AvatarFallback>

</Avatar>

                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                     <div className="flex flex-col space-y-1">
                 <p className="text-sm font-medium leading-none">  {session?.user?.name}! </p>
                 <p className="text-xs leading-none text-muted-foreground">{session?.user?.email}</p>
                 </div>
                </DropdownMenuLabel>
                <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/login' })}>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

