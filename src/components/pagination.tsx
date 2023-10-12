export default function Pagination(props:pageInfo){


// console.log(`pagina actual ${props.currentPage}\nultima pagina ${props.lastPage}\nPaginas totales: ${props.total}\ny el orden es ${props.order}\npor pagina: ${props.perPage}`)
  

const pageShow = 10  //how to links show in the page buttons
const pageNumbers = [] //Array with the page numbers
//generate page numbers back
for (let i = props.currentPage; i >= Math.max(props.currentPage - pageShow/2, 1); i--) {
  if (i >= 1) {
    pageNumbers.unshift(i);
  }
}

//Generate page numbers ahead

for (let i = props.currentPage+1; i <= Math.min(props.currentPage + pageShow/2, props.lastPage ) ; i++) {
  if (i <= props.lastPage) {
    pageNumbers.push(i);
  }
}


  return (
    <ul className="flex gap-12 justify-center p-5">
      <li><Link href={`./${props.order}-1`}>Primera</Link></li>
      <li><Link href={`./${props.order}-${props.currentPage-1}`}>IZQUIERDA</Link></li>
      {pageNumbers.map((pageNumber)=>(
      <li key={pageNumber} ><Link href={`./${props.order}-${pageNumber}`}>{pageNumber}</Link></li>
      ))}
      <li><Link href={`./${props.order}-${props.currentPage+1}`}>DERECHA</Link></li>
      <li><Link href={`./${props.order}-${props.lastPage}`}>Ultima</Link></li>
    </ul>
  )
}

import { pageInfo } from "@/interfaces"
import Link from "next/link"