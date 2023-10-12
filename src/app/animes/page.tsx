export default async function animePages(){
  return (
    <div className="flex flex-col p-5 bg-blue-600">
    <h1>anime page aca elegir el orden y por cual categoria ver</h1>
    <Link href={"/animes/TITLE_ROMAJI-1"}>ORDENAR POR NOMBRE</Link>
    <Link href={"/animes/POPULARITY_DESC-1"}>ORDENAR POR POPULARIDAD</Link>
    <Link href={"/animes/EPISODES_DESC"}>ORDENAR POR EPISODIOS</Link>
    <Link href={"/animes/STATUS_DESC"}>ORDENAR POR ESTADO</Link>
    <Link href={"/animes/SEARCH_MATCH"}>ORDENAR POR Resultado Busuqeda</Link>
    </div>
  )
}
import Link from "next/link"