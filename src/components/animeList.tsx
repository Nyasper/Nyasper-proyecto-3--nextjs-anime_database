export default function AnimeList(props:{animeQuery:animeQuery,params:string}){

    return (
      <div className="bg-blue-950 flex-col p-5 pt-[62px]">
      <h1 className="mt-5 mb-20 text-center text-4xl">{`Buscando:`}</h1>
      <ul className="flex flex-wrap justify-center gap-5 px-6 py-16 bg-slate-900">
        {props.animeQuery.Page.media?.map((animes:Anime)=>(
          <li key={animes.id} className="flex flex-col gap-4 justify-between items-center w-52">
            <Link href={`/animes/${props.params}/${animes.id}`}>
            {animes.title.romaji}
              <Image
                className=""
                src={animes.coverImage.large}
                width={208}
                height={280}
                alt={`${animes.title.romaji} image`}
              />
              </Link>
          </li>
        ))}
      </ul>
      <Link href={"/animes"}>VOLVER A ANIMES</Link>
      </div>
    )

}



import Image from "next/image"
import Link from "next/link"
import { Anime , animeQuery } from "@/interfaces"