import React from 'react'
import {RiLoader5Fill} from 'react-icons/ri'

const LoadingScraper = () => {
  return (
    <div
    className='flex items-center justify-center h-screen w-screen text-6xl font-bold'
    >
      <div
      className='text-6xl font-bold'
      >
  
        <RiLoader5Fill className='animate-spin h-5 w-5 mr-3'/>
        Scraper...</div>
    </div>
  )
}

export default LoadingScraper