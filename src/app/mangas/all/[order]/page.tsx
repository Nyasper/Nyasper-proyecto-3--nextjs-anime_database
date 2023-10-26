export default async function MangaListPage({params}:params){

  const order:animeOrder = params.order.split('-')[0] as animeOrder
  const page = parseInt(params.order.split('-')[1])

  //el slice muesta solo 20 personajes de ese anime
  // const paginasTotales = Math.ceil(characters.length/5)
  //muestra las paginas totales para todos los personajes de ese anime

  const Mangas:getAllAnimesQuery = await getAllMedia('MANGA',page,50,order)
  const pageInfo = Mangas.Page.pageInfo

  if (Mangas.Page){
    return (
      <div className="flex flex-col items-center justify-center pb-10">
        <MangasList
          getAllMangas={Mangas}
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
    )
  } else return(
    <h1>No data Found</h1>
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
import MangasList from "../mangasList"
import Pagination from "@/app/animes/all/[order]/pagination"