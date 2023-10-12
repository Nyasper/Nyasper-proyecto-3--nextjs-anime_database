export default async function AnimePage({params}:params){

  const order:animeOrder = params.order.split('-')[0] as animeOrder
  const page = parseInt(params.order.split('-')[1])

  //el slice muesta solo 20 personajes de ese anime
  // const paginasTotales = Math.ceil(characters.length/5)
  //muestra las paginas totales para todos los personajes de ese anime

  const allAnimes:animeQuery = await searchAnime(null,order,page,50)
  const pageInfo = allAnimes.Page.pageInfo


  if (allAnimes.Page){
    return (
      <>
        <AnimeList animeQuery={allAnimes} params={order} />
        <Pagination 
        currentPage={pageInfo.currentPage} 
        lastPage={pageInfo.lastPage} 
        perPage={pageInfo.perPage} 
        hasNextPage={pageInfo.hasNextPage} 
        total={pageInfo.total} 
        order={order}
        />
      </>
  )
  }
  

  
}


interface params {
  params:{
    order:animeOrder,
    page:pageInfo
  }
}


import Pagination from "@/components/pagination"
import { pageInfo , animeQuery , animeOrder} from "@/interfaces"
import AnimeList from "@/components/animeList"
import { searchAnime } from "@/aniListAPI"