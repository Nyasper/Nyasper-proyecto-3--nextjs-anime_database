export default async function AnimePage({params}:params ){

    const {animeID} = params 
    const {order} = params
    const {Page} = await getMediaInfoByID(animeID,1)
    const animeCharactersPages = [
      await getMediaInfoByID(animeID,1),
      await getMediaInfoByID(animeID,2),
      await getMediaInfoByID(animeID,3)
    ]
    return (
      <div>
        <MediaInfo
          Page={Page}
        />
        <CharactersList
          Page={animeCharactersPages[0].Page}
          mediaID={animeID}
          order={order}
          characterPage={1}
          mediaType="animes"
        />
        <CharactersList
          Page={animeCharactersPages[1].Page}
          mediaID={animeID}
          order={order}
          characterPage={2}
          mediaType="animes"
        />
        <CharactersList
          Page={animeCharactersPages[2].Page}
          mediaID={animeID}
          order={order}
          characterPage={3}
          mediaType="animes"
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


import { getMediaInfoByID } from "@/aniListAPI"
import CharactersList from "./charactersList"
import MediaInfo from "./mediaInfo"
import { animeOrder } from "@/interfaces"
