export default async function searchValue({params}:params){
  const {searchValue} = params
  const Animes = await getMediaBySearch(searchValue.replaceAll('%20',' '),'ANIME',1,50)
  return(
    <>  
    <AnimeList getAllAnimes={Animes} order="POPULARITY_DESC" title={`Search results for: ${searchValue.replaceAll('%20',' ')}`} />
    </>
  )
}

interface params {
  params: {
    searchValue:string
  }
}
import AnimeList from "../../all/[order]/animesList"
import { getMediaBySearch } from "@/aniListAPI"