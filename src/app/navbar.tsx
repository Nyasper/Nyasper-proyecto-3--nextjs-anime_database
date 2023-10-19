export default function Navbar(){
  
const links:linkInterface[] = [
  {
    name:'Home',
    route:'/'
  },
  {
    name:'Animes',
    route:'/animes'
  },
  {
    name:'Characters',
    route:'/characters'
  },
  {
    name:'About',
    route:'/about'
  }
]
  return(
    <nav>     
      <ul className="flex justify-start w-full gap-8 p-5 items-center bg-blue-800 fixed z-40 top-0" >
      <li className="ml-20">LOGO</li>
        {links.map(link=>(
          <li key={link.name}>
            <Link className="" href={link.route}>{link.name}</Link>
          </li>
        ))}
        <li className="ml-auto mr-10">
          <Link href={'/favorites'}>FAVORITES</Link>
          </li>
      </ul>
    </nav>
  )
}
import HamburguerMenu from "../components/hamburguerMenu"
import Link from "next/link"
import { linkInterface } from "@/interfaces"
