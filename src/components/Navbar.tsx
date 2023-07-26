"use client";
import { PiPopcornFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = (path:string) => pathname === path
  return (
    <div className="bg-blue-600 text-blue-200   sticky top-0 duration-100 z-10">
     
    <nav className="container">
      <div className="grid grid-cols-[auto,1fr,auto] py-2 gap-8">
        
        <div className="text-xl font-bold text-white px-2 rounded-md py-2">
          <Link href="/">
          Cinerama Scraper
          </Link>
          </div>
     
        <ul className={`flex gap-8 justify-end`}>
          <li
            className={`flex items-center gap-1 
          cursor-pointer
          text-sm
          hover:text-white
          
                ${isActive('/cartelera') ? 'text-white  ' : ''}
          `}
          onClick={() => router.push('/cartelera')}
          >
            <PiPopcornFill  size={20} className="flex-shrink-0 " />
      Cartelera
    
            
          </li>

          <li
            className={`flex  items-center gap-1 cursor-pointer
             text-sm
             hover:text-white
            ${isActive('/') ? 'text-white  ' : ''}      
          `}
          onClick={() => router.push('/')}
          >
   
            <MdLocalMovies size={20} className="flex-shrink-0" />
            Scraper

            
          </li>
   
        </ul>
     
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
