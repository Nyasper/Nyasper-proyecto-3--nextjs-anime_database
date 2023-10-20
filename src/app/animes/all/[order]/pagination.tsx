export default function Pagination(props:pageInfo){


if (props){
  
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
    <ul className="flex gap-8 justify-center p-6 w-max bg-blue-950 mx-auto rounded-xl">
      <li><Link href={`./${props.order}-1`}>Primera</Link></li>
      <li><Link href={`./${props.order}-${props.currentPage-1}`}>IZQUIERDA</Link></li>
      {pageNumbers.map((pageNumber)=>(
      <li key={pageNumber} ><Link href={`./${props.order}-${pageNumber}`}>{pageNumber}</Link></li>
      ))}
      <li><Link href={`./${props.order}-${props.currentPage+1}`}>DERECHA</Link></li>
      <li><Link href={`./${props.order}-${props.lastPage}`}>Ultima</Link></li>
    </ul>
  )
} else return null
}


import { pageInfo } from "@/interfaces"
import Link from "next/link"