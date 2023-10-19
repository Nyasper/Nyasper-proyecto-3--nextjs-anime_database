export default function AnimeList(props: props) {
  /* <div className="bg-black w-1/5 min-h-screen relative">
        <aside className={``}>
          <h3>Ordenar Por:</h3>
          <ul>
            <li>ITEM 1</li>
            <li>ITEM 2</li>
          </ul>
        </aside>
      </div> */
  return (
      <div className="flex flex-col flex-wrap p-8 py-4 bg-blue-950 w-11/12 mx-auto mt-28 mb-8 rounded-xl">
        <h2 className="mt-5 text-center text-4xl">{props.title}</h2>
        <ul className="flex flex-wrap justify-center place-items-end gap-5 w-full mt-28 mb-8 rounded-xl">
          {props.getAllAnimes.Page.media?.map((animes: Anime) => (
            <li key={animes.id} className="flex flex-col gap-4 justify-between items-center w-52">
              <Link href={`/animes/all/${props.order}/${animes.id}`}>
                {animes.title.romaji}
                <Image
                  src={animes.coverImage.large}
                  width={208}
                  height={280}
                  alt={`${animes.title.romaji} image`}
                />
              </Link>
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
import Image from "next/image"
import Link from "next/link"
import { Anime, getAllAnimesQuery, animeOrder } from "@/interfaces"