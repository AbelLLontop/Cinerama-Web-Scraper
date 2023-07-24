import { ItemText } from "@/components/BannerMovie";
import { IconMovie } from "@/components/Icons";
import { MdDateRange } from "react-icons/md";
import React from "react";
import ListMovies from "@/components/ListMovies";
import { MoviesService } from "@/services/MoviesService";



export default async function CarteleraPage () {
  const movieService = new MoviesService();
  const movies = await movieService.getAndSaveAllMoviesByScraper();
  return (
    <div className="container mx-auto pt-8">
      <ItemText
        title={<h1 className="text-2xl font-bold">Peliculas en Cartelera</h1>}
        icon={<IconMovie />}
        value={<span>Colleccion de Peliculas</span>}
      />
     <ListMovies movies={movies}/>
    </div>
  );
};

