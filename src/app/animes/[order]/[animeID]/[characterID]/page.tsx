export default async function characterPage({params}:params){
  const {characterID} = params
  const characterInfo = await getCharacterInfo(characterID)
  console.log(characterInfo)
  return (
    <div>
    <h1>{characterInfo.Character.name.full}</h1>
    <ul>
      <li><Image src={characterInfo.Character.image.large} width={230} height={345} alt={`${characterInfo.Character.name.full} image`}/></li>
      <li>Age: {characterInfo.Character.age}</li>
      <li>Gender: {characterInfo.Character.gender}</li>
      <li>{`Date of Birh: ${characterInfo.Character.dateOfBirth.day}/${characterInfo.Character.dateOfBirth.month}`}</li>
      <li>Description: {characterInfo.Character.description}</li>
      <li>Anilist URL: <a href={characterInfo.Character.siteUrl} target="_blank"> {characterInfo.Character.siteUrl}</a></li>
    </ul>
    </div>
  )
}


interface params{
  params:{
    characterID:number
  }
}

import Image from "next/image"
import { getCharacterInfo } from "@/aniListAPI"