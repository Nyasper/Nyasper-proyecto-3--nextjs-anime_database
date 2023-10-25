export default async function mangaPages(){


  const linksOrders:LinkOrder[] = [
  { 
    textContent:"Por Nombre",
    href:"/mangas/all/TITLE_ROMAJI-1"
  },
  {
    textContent:"Por Popularidad",
    href:"/mangas/all/POPULARITY_DESC-1"
  },
  {
    textContent:"Por Episodios",
    href:"/mangas/all/EPISODES_DESC-1"
  },
  {
    textContent:"Por Estado",
    href:"/mangas/all/STATUS_DESC-1"
  }
]

  return (
    <div className="flex flex-col px-8 py-4 bg-blue-950 w-max mx-auto my-28 rounded-xl">
    <h1 className="text-2xl p-1 mb-4" >Buscar un Manga:</h1>
    <SearchFormComponent action={searchM} placeHolder="Search a Manga..." />
    <h2 className="text-lg mt-5">Listar todos los mangas:</h2>
    <ul className="p-1 text-sky-400 text-lg">
    {
    linksOrders.map((link)=>(
      <li key={link.href} className="px-1" ><Link href={link.href} className="w-max" >{link.textContent}</Link></li>
    ))
    }
    </ul>
    </div>
  )
}

interface LinkOrder{
  textContent:string,
  href:`${string}/${animeOrder}-1`
}

import SearchFormComponent from "@/app/animes/search/searchFormComponent"
import searchM from "./searchM"
import Link from "next/link"
import { animeOrder } from "@/interfaces"
