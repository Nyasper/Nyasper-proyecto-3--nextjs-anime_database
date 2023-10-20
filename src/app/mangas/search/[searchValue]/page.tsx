export default async function SearchCharacter({params}:params){
  const {searchValue} = params

  // const Character = await getCharactersBySearch('Mai')

 
return (
  <h1>Hola</h1>
)
}

// import { getCharactersBySearch } from "@/aniListAPI"

interface params {
  params: {
    searchValue:string
  }
} 

import Image from "next/image"