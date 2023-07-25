import BannerMovie, { ItemText } from "@/components/BannerMovie";
import { IconMovie } from "@/components/Icons";
import ListMovies from "@/components/ListMovies";
import YoutubeComponent from "@/components/YoutubeComponent";
import { IMovie } from "@/models/movie";
import { MoviesService } from "@/services/MoviesService";
import { parseSlug } from "@/utils/parseSlug";

export default async function DetallePeliculaPage({ params }: any) {
  const movieService = new MoviesService();
  const movies:IMovie[] = await JSON.parse(JSON.stringify(await movieService.getMovies()));

  const searchMovie = movies.find(
    (movie) => parseSlug(movie.title!!) === decodeURIComponent(params.id)
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
      <BannerMovie movie={searchMovie}  />
      <YoutubeComponent movie={searchMovie} />
      <div className="container mx-auto my-20">

      <ItemText
        title={<h3 className="text-xl font-bold">Otros Estrenos</h3>}
        icon={<IconMovie />}
        value={<span>
          {movies.length-1} peliculas en cartelera
        </span>}
      />
     <ListMovies movies={
        movies.filter((movie)=>movie.title!==searchMovie.title)
     }/>
      </div>
    </main>
  );
}
