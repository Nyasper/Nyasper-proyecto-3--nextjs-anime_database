export default async function searchPageLayout({children}:any){
  async function search(formData: FormData) {
    'use server'
    const searchValue = formData.get('search')
    redirect(`/animes/search/${searchValue}`)
  }
  return (
    <>
    <SearchFormComponent action={search} />
    {children}
    </>
  )
}
import { redirect } from "next/navigation"
import SearchFormComponent from "./searchFormComponent"