import BannerMovie from "@/components/BannerMovie";
import YoutubeComponent from "@/components/YoutubeComponent";
import { MoviesService } from "@/services/MoviesService";
import { parseSlug } from "@/utils/parseSlug";

export default async function DetallePeliculaPage({ params }: any) {
  const movieService = new MoviesService();
  const movies = await movieService.getAndSaveAllMoviesByScraper();
  const searchMovie = movies.find(
    (movie) => parseSlug(movie.title) === decodeURIComponent(params.id)
  );  
  if(!searchMovie){
    return <div
    className="flex items-center justify-center py-40 w-screen text-6xl font-bold"
    >
      <h1
      className="text-6xl font-bold"
      >404</h1>
    </div>
  }

  return (
    <main>
      {/* {movies.map((movie) => ( <BannerMovie movie={movie} key={movie._id} />))} */}
      <BannerMovie movie={searchMovie} key={searchMovie._id} />
      <YoutubeComponent movie={searchMovie} />
    </main>
  );
}
