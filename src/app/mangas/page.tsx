export default async function Characters(){

const {Page} = await getAllCharacters('POPULARITY_DESC')

async function search(formData: FormData) {
  'use server'
  const searchValue = formData.get('search')
  redirect(`/mangas/search/${searchValue}`)
}


  return (
      <div>
        <SearchFormComponent action={search} placeHolder="Search a Character..."/>
      </div>
  )
}

import Image from "next/image"
import SearchFormComponent from "@/app/animes/search/searchFormComponent"
import { redirect } from "next/navigation";
import Link from "next/link"
import { getAllCharacters } from "@/aniListAPI"