export default async function AnimePage({params}:params ){

  const {animeID} = params 
  const {order} = params
  console.log("la id del anime es: ",animeID)


const charaData:AnimeCharacters = await getCharactersFromAnimeId(animeID,"RELEVANCE")
console.log(charaData.Page.media[0].characters.nodes)
  return (
    <div>
    <h1>{charaData.Page.media[0].title.romaji}</h1>
    <ul className="flex flex-wrap justify-center gap-5 px-6 py-16">
      {charaData.Page.media[0].characters.nodes.map(character=>(
        <li key={character.id}>
          <h3>{character.name.full}</h3>
          <Link href={`/animes/${order}/${animeID}/${character.id}`}>
            <Image
              className=""
              src={character.image.large}
              width={230}
              height={345}
              alt={`${character.name.full} image`}
                />
            </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

interface params {
  params:{
    order:animeOrder,
    animeID:number
  }
}

import Link from "next/link"
import Image from "next/image"
import { getCharactersFromAnimeId , searchAnime } from "@/aniListAPI"
import { animeQuery , AnimeCharacters , animeOrder } from "@/interfaces"
