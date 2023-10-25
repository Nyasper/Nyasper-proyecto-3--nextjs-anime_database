export default function Navbar(){
  
const links:linkInterface[] = [
  {
    name:'Home',
    route:'/'
  },
  {
    name:'Characters',
    route:'/characters'
  }
]
  return(
    <nav className="pb-3">     
      <ul className="flex justify-start w-full gap-8 p-4 items-center bg-blue-800 fixed z-40 top-0 rounded-b-full shadow-md shadow-gray-950" >
      <li className="ml-20">LOGO</li>
      <li><Link href={'/'}>Home</Link></li>
      <li className="relative group py-2">
          <span className="cursor-pointer mr-1">Animes
            <span className="w-0 h-0 cursor-pointer border-t-[6px] border-b-[6px] border-r-[8px]  border-b-transparent border-t-transparent border-r-white -rotate-90 absolute left-max ml-2    mt-2">
            </span>
          </span>
          <ul className="hidden transition group-hover:block absolute left-0 mt-2 bg-blue-950 rounded-xl">
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/animes/search'}>Buscar un Anime</Link></li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/animes/all/TITLE_ROMAJI-1'}>Listar todos los Animes</Link></li>
            <li className="w-max mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/animes/all/POPULARITY_DESC-1'}>Ordenar por Popularidad</Link></li>
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/animes/all/EPISODES_DESC-1'}>Ordenar por Episodios</Link></li>
          </ul>
      </li>
      <li className="relative group py-2">
          <span className="cursor-pointer mr-1">Mangas
            <span className="w-0 h-0 cursor-pointer border-t-[6px] border-b-[6px] border-r-[8px]  border-b-transparent border-t-transparent border-r-white -rotate-90 absolute left-max ml-2 mt-2">
            </span>
          </span>
          <ul className="hidden transition group-hover:block absolute left-0 mt-2 bg-blue-950 rounded-xl">
            <li className="w-full mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/mangas/search'}>Buscar un Manga</Link></li>
            <li className="w-max mx-auto p-2 px-4 hover:bg-sky-400 rounded-xl"><Link href={'/mangas/all/POPULARITY_DESC-1'}>listar todos los mangas</Link></li>
          </ul>
      </li>
      <li className="ml-auto mr-10"><Link href={'/favorites'}>FAVORITES</Link></li>
      </ul>
    </nav>
  )
}
import Link from "next/link"
import { linkInterface } from "@/interfaces"
