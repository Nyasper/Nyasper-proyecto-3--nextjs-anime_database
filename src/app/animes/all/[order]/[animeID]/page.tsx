export default async function AnimePage({params}:params ){

    const {animeID} = params 
    const {order} = params
    const {Page} = await getAnimeInfoByAnimeId(animeID,1)
    const animeCharactersPages = [
      await getAnimeInfoByAnimeId(animeID,1),
      await getAnimeInfoByAnimeId(animeID,2),
      await getAnimeInfoByAnimeId(animeID,3)
    ]
    return (
      <div>
        <AnimeInfo
          Page={Page}
        />
        <CharactersList
          Page={animeCharactersPages[0].Page}
          animeID={animeID}
          order={order}
          characterPage={1}
        />
        <CharactersList
          Page={animeCharactersPages[1].Page}
          animeID={animeID}
          order={order}
          characterPage={2}
        />
        <CharactersList
          Page={animeCharactersPages[2].Page}
          animeID={animeID}
          order={order}
          characterPage={3}
        />
      </div>
    )
  }

  interface params {
    params:{
      order:animeOrder,
      animeID:number
    }
}


import { getAnimeInfoByAnimeId } from "@/aniListAPI"
import CharactersList from "./charactersList"
import AnimeInfo from "./animeInfo"
import { animeOrder } from "@/interfaces"
