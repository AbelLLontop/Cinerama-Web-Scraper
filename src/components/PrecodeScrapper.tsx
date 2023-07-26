import { MoviesService } from '@/services/MoviesService';
import React from 'react'
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const PrecodeScrapper = async () => {
    await delay(8000)

    const movieService = new MoviesService();
    const movies = await movieService.getMovies();
  return (
    <pre className="
    bg-[#ececec]
    p-4
    overflow-auto
    rounded-lg

  
  ">
    {JSON.stringify(movies,null,2)}
  </pre>
  )
}

export default PrecodeScrapper