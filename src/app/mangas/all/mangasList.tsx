export default function MangasList(props: props) {

  async function search(formData: FormData) {
    'use server'
    const searchValue = formData.get('search')
    redirect(`/mangas/search/${searchValue}`)
  }

  return (
      <div className="flex flex-col flex-wrap p-8 bg-blue-950 w-11/12 mx-auto mt-28 mb-8 rounded-xl">
        <div className="flex w-full justify-between px-12">
          <h2 className="mt-5 text-center text-4xl">{props.title}</h2>
          <SearchFormComponent action={search} placeHolder="Search a Manga..." />
        </div>
        <ul className="flex flex-wrap justify-center place-items-end gap-5 w-full mt-8 mb-8 rounded-xl">
          {props.getAllMangas.Page.media?.map((animes: Anime) => (
            <li key={animes.id} className="flex flex-col gap-4 justify-end items-center h-96 w-52">
              <Link href={`/mangas/all/${props.order}/${animes.id}`}>
                {animes.title.romaji}
                <Image
                  src={animes.coverImage.large?animes.coverImage.large:"/media-image.jpg"}
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
  getAllMangas: getAllAnimesQuery,
  order: animeOrder,
  title: string
}
import Image from "next/image"
import Link from "next/link"
import { Anime, getAllAnimesQuery, animeOrder } from "@/interfaces"
import { redirect } from "next/navigation"
import SearchFormComponent from "@/app/animes/search/searchFormComponent"