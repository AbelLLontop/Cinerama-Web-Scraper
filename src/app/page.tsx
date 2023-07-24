import { ItemText } from "@/components/BannerMovie";
import { IconMovie } from "@/components/Icons";
import { MoviesService } from "@/services/MoviesService";


export default async function Home() {
  const movieService = new MoviesService();
  const movies = await movieService.getAndSaveAllMoviesByScraper();

  return (
    <main className="container mx-auto py-8">
       <ItemText
        title={<h1 className="text-2xl font-bold">Data Scraper </h1>}
        icon={<IconMovie />}
        value={<span>
         Cinerama and TMDB 
        </span>}
      />
      <pre className="
        bg-[#ececec]
        p-4
        overflow-auto
        rounded-lg

      
      ">
        {JSON.stringify(movies,null,2)}
      </pre>
    </main>
  );
}
