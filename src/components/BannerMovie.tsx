'use client'
import React from "react";
import { DuracionIcon, EstrenoIcon, IconMovie } from "./Icons";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiSealCheckFill } from "react-icons/pi";

export const ItemText = ({
  isTitle,
  title,
  value,
  icon,
  light,
}: {
  isTitle?: boolean;
  title: any;
  value: any;
  icon?: any;
  light?: boolean;
}) => {
  return (
    <div>
      <div
        className={`${
          isTitle ? "" : "items-center"
        } font-bold flex flex-wrap  gap-1`}
      >
        {icon ? icon : ""}
        {title}
      </div>
      <div
        className={`${light ? "bg-yellow-400 px-1 font-bold" : ""} w-fit my-2`}
      >
        {value}
      </div>
    </div>
  );
};
const ListLabels = ({ time, list }: any) => {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((item: any) => (
        <span
          key={item}
          className="bg-[#273A4D] text-white rounded-lg text-sm p-1 px-3"
        >
          {time ? formatTime(item) : capitalizeFirstLetter(item)}
        </span>
      ))}
    </div>
  );
};

const BannerMovie = ({ movie }: any) => {
  return (
    <div style={
      {
        background:`
        linear-gradient(
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 1)
        ),
        url(${movie.extra.backdrop_path})
        `,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"

      }
    }>
      <div className=" container grid grid-cols-2 gap-8 py-20">
        <div className="max-w-[36rem]">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className="my-3">{capitalizeFirstLetter(movie.sinopsis)}</p>
          <div className="flex gap-4">
            <ItemText
              icon={<PiSealCheckFill color="#1b9e64" size={20} />}
              title="Estreno"
              value={parseFecha(movie.fechaEstreno)}
              light={true}
            />
            <ItemText
              icon={<DuracionIcon />}
              title="Duracion"
              value={movie.duracion}
            />
          </div>
          <ItemText
            icon={<EstrenoIcon />}
            title="Horarios"
            value={<ListLabels list={movie.horarios} time={true} />}
          />
        </div>
        <div>
        <ItemText
              icon={<EstrenoIcon />}
              title="Categorias"
              value={<ListLabels list={movie.types} time={false} />}
            />
            <ItemText
              icon={<IconMovie />}
              title="Reparto"
              value={capitalizeNames(movie.reparto)}
            />
            <ItemText
              icon={<BiSolidCameraMovie size={20} />}
              title="Director"
              value={capitalizeNames(movie.director)}
            />
        </div>
      </div>
    
    </div>
  );
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

const capitalizeFirstLetter = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
function capitalizeNames(names: string) {
  const nameArray = names.split(", ");

  function capitalizeWord(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  const capitalizedNames = nameArray.map((name) => {
    const words = name.split(" ");
    const capitalizedWords = words.map(capitalizeWord);
    return capitalizedWords.join(" ");
  });

  const capitalizedString = capitalizedNames.join(", ");

  return capitalizedString;
}
function formatTime(timeString: string) {
  const formattedTime = timeString.replace(/(PM|AM)/gi, (match) =>
    match.toLowerCase()
  );

  return formattedTime;
}
{
  /* <div className="bg-[#eaeaea] p-4 rounded-lg mt-4 hidden lg:block">
<div className="flex gap-2  ">
  <HiLocationMarker size={28} />
  Av. V. Raúl H. de la Torre Mza. B Lote. 1A Sector Campo Ferial
  San P. Ancash Santa Chimbote
</div>
</div> */
}

export default BannerMovie;
