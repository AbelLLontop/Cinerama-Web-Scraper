"use client";

import { parseSlug } from "@/utils/parseSlug";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdDateRange } from "react-icons/md";
const capitalizeFirstLetter = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const parseFecha = (fechaOriginal: string) => {
    // Obtener el día, mes y año
    const year = fechaOriginal.slice(0, 4);
    const month = fechaOriginal.slice(5, 7);
    const day = fechaOriginal.slice(8, 10);
  
    // Formato personalizado: "dd/mm/yyyy"
    const fechaPersonalizada = `${day}/${month}/${year}`;
    return fechaPersonalizada;
  };
const ItemMovie = ({ movie }: any) => {
  return (
    <div className="flex gap-4">
      <div>
     
        <Link
         href={`/peliculas/${parseSlug(movie.title)}`}
        style={{
          width: '200px',
          height: '300px'
        }}
        className=" bg-purple-600 rounded-md
        hover:shadow-lg
        group
        cursor-pointer
        ">
          
          <Image
            alt={movie.title}
            width={200}
            height={600}
            src={movie.extra.poster_path}
            className="rounded-md
            group-hover:opacity-80

            "
            objectFit="none"
          />
        </Link>
        <div >
        <h3 className="font-bold">{movie.title}</h3>
        <div className="flex gap-1 items-center font-bold">
          <MdDateRange size={20} />
          {parseFecha(movie.fechaEstreno)}
        </div>
        <div className="text-gray-700 text-sm">Duracion</div>
        <div className="font-bold">{movie.duracion}</div>
       
      </div>
        {/* <Link className="block text-center bg-[#DEF457] w-full p-2 rounded-md mt-2 text-sm
        hover:bg-[#CDE34F]
        "
        href={`/peliculas/${parseSlug(movie.title)}`}
        >
       
          Ver detalles
    
        </Link> */}
      </div>
  
    </div>
  );
};

const ListMovies = ({ movies }: { movies: any[] }) => {
  return (
    <div
    style={{
      gridTemplateColumns:'repeat( auto-fit, minmax(200px, 1fr) )',
      padding:'2rem',
      background:'#f3f3f3'
    }}
    className="grid  gap-4 rounded-lg">
      {movies.map((movie) => (
        <ItemMovie key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default ListMovies;
