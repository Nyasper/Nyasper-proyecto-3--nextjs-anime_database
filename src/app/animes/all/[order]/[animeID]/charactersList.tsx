export default function CharactersList(props:props){
  return (
    <div className="flex flex-col flex-wrap p-1 bg-blue-950 w-11/12 mx-auto my-4 mb-8 rounded-xl border">
      <h3 className="text-2xl font-bold py-4 px-8">Characters Page {props.characterPage}</h3>
      <ul className="flex flex-wrap justify-center place-items-baseline gap-5 w-full px-8 py-6">
      {props.Page.media[0].characters.nodes.map(character=>(
        <li key={character.id}>
          <p className="text-lg text-center py-1">{character.name.full}</p>
          <Link href={`/animes/all/${props.order}/${props.animeID}/${character.id}`}>
            <Image
              src={character.image.large}
              width={208}
              height={280}
              alt={`${character.name.full} image`}
            />
            </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}


interface props{
  Page: {
    pageInfo:pageInfo,
    media:[{
      id:number,
      title:title,
      type:Type,
      format:Format,
      season:Season,
      seasonYear:number,
      status:Status,
      popularity:number,
      episodes:number|null,
      genres:string[],
      isAdult:boolean,
      bannerImage:string,
      coverImage:coverImage,
      characters:{
        nodes:characterQuery[]
      }
    }]
  }
  animeID:number,
  order:string,
  characterPage:number
}



import { pageInfo ,Season, Status, coverImage , title , characterQuery , Format , Type} from "@/interfaces"
import Image from "next/image"
import Link from "next/link"