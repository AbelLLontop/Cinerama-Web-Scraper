import { ItemText } from "@/components/BannerMovie";
import { IconMovie } from "@/components/Icons";
import { MdDateRange } from "react-icons/md";
import React from "react";
import ListMovies from "@/components/ListMovies";
import { MoviesService } from "@/services/MoviesService";
import Image from "next/image";


export default async function CarteleraPage () {
  const movieService = new MoviesService();
  const movies = await movieService.getAndSaveAllMoviesByScraper();
  return (
    <div className="container mx-auto">
      <div className="my-4 flex items-center gap-16 justify-between">
      <ItemText
        title={<h1 className="text-2xl font-bold">Cartelera Chimbote</h1>}
        icon={<IconMovie />}
        value={<span>Av. V. Raúl H. de la Torre Mza. B Lote. 1A Sector Campo Ferial
          San P. Ancash Santa Chimbote</span>}
      />
      <Image
      width={600}
      height={200}
      alt="cinema"
      className="rounded-md"
      src={'http://www.cinerama.com.pe/_admin/assets/images/cines/WhatsApp%20Image%202022-10-13%20at%2022.48.12.jpeg'}
      />

      </div>
    
      <ItemText
        title={<h2 className="text-xl font-bold">Peliculas</h2>}
        icon={<IconMovie />}
        value={<span>
          {movies.length} peliculas en cartelera
        </span>}
      />
     <ListMovies movies={movies}/>
    </div>
  );
};

