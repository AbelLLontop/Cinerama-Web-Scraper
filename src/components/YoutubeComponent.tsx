"use client";
import { useState } from "react";

import YouTube, { YouTubeProps } from "react-youtube";
import { IconMovie } from "./Icons";
import { ItemText } from "./BannerMovie";

const YoutubeComponent = ({ movie }: any) => {
  const [ready, setReady] = useState(false);

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      wmode: "opaque",
      origin: "http://localhost:3000",
      //   autoplay: 1,
      cc_load_policy: 0,
      fs: 0,
      iv_load_policy: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };
  const onready = () => {
    setReady(true);
  };
  const existTrailer = movie?.extra?.trailer?.key;
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="mb-3 flex items-center">      
        <ItemText
        title={<h2 className="text-2xl font-bold">
            Trailer
        </h2>}
        icon={<IconMovie/>}
        value={<span>Un trailer de {movie.title}</span>}

        />
        </div>
      {!existTrailer && (
<div>
  <h3 className="text-center text-2xl font-bold">No hay trailer disponible</h3>
</div>

      )}
        <div
          className="relative w-full aspect-video justify-center flex"
          style={{
            backgroundImage: `url(${movie.extra.backdrop_path})`,
            backgroundSize: "cover",
          }}
        >
          {
            existTrailer &&(
              <YouTube
                className="absolute left-0 top-0 w-full h-full"
                videoId={movie.extra.trailer.key}
                opts={opts}
                onReady={onready}
              />
            )
          }
          {/* <ReactPlayer 
            className='absolute left-0 top-0 w-full h-full'
            url={`https://www.youtube.com/watch?v=${movie.extra.trailer.key}`}
            width='100%'
            config={{
                youtube
            }} 
            height='100%'
            controls={true}
            />*/}
          {!ready && (
            <div className="absolute left-0 top-0 w-full h-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeComponent;
