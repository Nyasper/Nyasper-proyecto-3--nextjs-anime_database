export default async function AnimePage({params}:params){

  const order:animeOrder = params.order.split('-')[0] as animeOrder
  const page = parseInt(params.order.split('-')[1])

  //el slice muesta solo 20 personajes de ese anime
  // const paginasTotales = Math.ceil(characters.length/5)
  //muestra las paginas totales para todos los personajes de ese anime

  const Animes:getAllAnimesQuery = await getAllMedia("ANIME",page,50,order)
  const pageInfo = Animes.Page.pageInfo

  return Animes ? (
      <div className="flex flex-col items-center justify-center">
        <AnimesList
          getAllAnimes={Animes}
          order={order}
          title={`Order by: ${order}`}
        />
        <Pagination 
          currentPage={pageInfo.currentPage} 
          lastPage={pageInfo.lastPage} 
          perPage={pageInfo.perPage} 
          hasNextPage={pageInfo.hasNextPage} 
          total={pageInfo.total} 
          order={order}
        />
      </div>
    ) : (
      <DefaultNotFound />
    )
}

interface params {
  params:{
    order:animeOrder,
    page:pageInfo
  }
}


import { pageInfo , animeOrder, getAllAnimesQuery} from "@/interfaces"
import { getAllMedia } from "@/aniListAPI"
import AnimesList from "./animesList"
import Pagination from "./pagination"
import DefaultNotFound from "./defaultNotFound"