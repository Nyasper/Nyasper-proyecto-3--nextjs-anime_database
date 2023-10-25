export default async function animePages(){

  async function create(formData: FormData) {
    'use server'
    const searchValue = formData.get('search')
    redirect(`/animes/search/${searchValue}`)
  }

  const linksOrders:LinkOrder[] = [
  { 
    textContent:"Por Nombre",
    href:"/animes/all/TITLE_ROMAJI-1"
  },
  {
    textContent:"Por Popularidad",
    href:"/animes/all/POPULARITY_DESC-1"
  },
  {
    textContent:"Por Episodios",
    href:"/animes/all/EPISODES_DESC-1"
  },
  {
    textContent:"Por Estado",
    href:"/animes/all/STATUS_DESC-1"
  }
]

  return (
    <div className="flex flex-col px-8 py-4 bg-blue-950 w-max mx-auto my-28 rounded-xl">
    <h1 className="text-2xl p-1 mb-4" >Buscar un Anime:</h1>
    <SearchFormComponent action={create} placeHolder="Search a Anime..." />
    <h2 className="text-lg mt-5">Listar todos los animes:</h2>
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

import SearchFormComponent from "./searchFormComponent"
import { redirect } from "next/navigation";
import Link from "next/link"
import { animeOrder } from "@/interfaces"
import search from "../all/[order]/search"