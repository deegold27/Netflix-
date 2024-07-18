import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import { MovieCard } from "./MovieCard";

    async function  getData(userId: string) {
    
    
        const data = await prisma.movie.findMany({
            where: {
                category: "Boxing",
            },
            select:{
                age: true,
                duration: true,
                id: true,
                title: true,
                release: true,
                imageString: true,
                overview: true,
                videoSource: true,
                youtubeString: true,
                watchList: {
                    where: {
                        userId: userId,
                    },
                },
            },
            orderBy: {
                createdAt:'desc' // descending of this movie list
            },
            take: 4,
        });
        return data;
    }
     
export default  async function Boxing() {
   const session = await getServerSession(authOptions);

    const data = await getData(session?.user?.email as string);
   

    









if (!data) {
    return 'No Live Boxing posted yet'
} else {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {data?.map((movie) => (
          <div key={movie.id} className="relative h-48">
          <img src={movie.imageString}
              alt="Movie"
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
               />
             
             
             <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            
           <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
            <img 
             src={movie.imageString} 
             alt="Movie" 
             width={800}
              height={800}
               className="absolute w-full h-full -z-10 rounded-lg object-cover" />
      
             <MovieCard 
             movieId={movie.id} 
             watchListId={movie.watchList[0]?.id} 
             overview={movie.overview}
               title={movie.title}
                youtubeUrl={movie.youtubeString} 
                 watchList={movie.watchList.length > 0 ? true : false} 
             key={movie.id}
             age={movie.age}
             time={movie.duration}
             year={movie.release}
      videoSource={movie.videoSource}
             
             />
             
              </div>
               </div>
      </div>
        
      
        ))}
             </div>
      
          )
      
          }
      
    
}