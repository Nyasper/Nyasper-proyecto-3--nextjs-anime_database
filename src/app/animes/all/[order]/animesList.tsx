export default function AnimeList(props: props) {

 return (
      <div className="flex flex-col flex-wrap p-8 bg-blue-950 w-11/12 mx-auto mt-28 mb-8 rounded-xl">
        <div className="flex w-full justify-between px-12">
          <h2 className="mt-5 text-center text-4xl">{props.title}</h2>
          <SearchFormComponent action={search} placeHolder="Search..." />
        </div>
        <ul className="flex flex-wrap justify-center place-items-end gap-5 w-full mt-8 mb-8 rounded-xl">
          {props.getAllAnimes.Page.media?.map((animes: Anime) => (
            <li key={animes.id} className="flex flex-col gap-4 justify-end items-center mx-4 h-96 w-52 overflow-auto">
              <Link href={`/animes/all/${props.order}/${animes.id}`}>
                {animes.title.romaji}
                <Image
                  src={animes.coverImage.large?animes.coverImage.large:"/media-image.jpg"}
                  width={208}
                  height={280}
                  alt={`${animes.title.romaji} image`}
                />
              </Link>
              <FavoriteButton mediaInfo={animes} />
            </li>
          ))}
        </ul>
      </div>
  )
}


interface props {
  getAllAnimes: getAllAnimesQuery,
  order: animeOrder,
  title: string
}

import FavoriteButton from "./[animeID]/favoriteButton"
import Image from "next/image"
import Link from "next/link"
import { Anime, getAllAnimesQuery, animeOrder } from "@/interfaces"
import search from "./search"
import SearchFormComponent from "../../search/searchFormComponent"