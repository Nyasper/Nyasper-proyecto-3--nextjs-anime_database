export default async function searchValue({params}:params){
  const {searchValue} = params
  const Animes = await getAnimesBySearch(searchValue.replaceAll('%20',' '),1,50)
  return(
    <>  
    <AnimeList getAllAnimes={Animes} order="POPULARITY_DESC" title={`Mostrando Resultados para: ${searchValue.replaceAll('%20',' ')}`} />
    </>
  )
}

interface params {
  params: {
    searchValue:string
  }
}
import AnimeList from "@/app/animes/all/[order]/animesList"
import { getAnimesBySearch } from "@/aniListAPI"