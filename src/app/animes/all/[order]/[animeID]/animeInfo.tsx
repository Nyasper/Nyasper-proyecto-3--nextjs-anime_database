export default async function AnimeInfo(props:props){
  return (
    <>
    <h2 className="text-5xl text-center py-4 my-10">{props.Page.media[0].title.romaji}</h2>
    <div className="w-full h-max p-2 my-6">
      <Image
      className="mx-auto"
        src={props.Page.media[0].bannerImage}
        width={1000}
        height={500}
        alt={`${props.Page.media[0].title.romaji} banner image`}
      />
    </div>
    <div className="bg-blue-950 p-4 border rounded-xl w-11/12 mx-auto h-max">
      <h3 className="text-2xl font-bold px-8">Anime Information:</h3>
      <ul className="flex flex-col text-lg px-8 my-2 gap-1">
        <li>Format: {props.Page.media[0].format}</li>
        <li>Season: {props.Page.media[0].season} {props.Page.media[0].seasonYear}
        </li>
        <li>Status: {props.Page.media[0].status}</li>
        <li>Episodes: {props.Page.media[0].episodes}</li>
        <li>Genres: {props.Page.media[0].genres}</li>
        <li>Popularity: {props.Page.media[0].popularity}</li>
      </ul>
    </div>
    </>
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
}

import { pageInfo ,Season, Status, coverImage , title , characterQuery , Format , Type} from "@/interfaces"
import Image from "next/image"