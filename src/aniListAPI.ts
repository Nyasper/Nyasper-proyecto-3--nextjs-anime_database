//DOCUMENTATION : https://anilist.github.io/ApiV2-GraphQL-Docs/
const url = 'https://graphql.anilist.co'

export async function searchAnime( search:string|null , order:animeOrder , page:number , perPage:number):Promise<animeQuery> {
const query =`
query ($id: Int, $page: Int, $perPage: Int, $search: String, $genre: String  , $type : MediaType , $isAdult : Boolean ){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    },
    media (sort: [${order}],id: $id, search: $search , genre: $genre , type: $type ,  isAdult: $isAdult ){
      id,
      title {
        romaji,
        english
      },
      type,
      format,
      season,
      seasonYear,
      status,
      popularity,
      episodes,
      chapters,
      popularity,
      genres,
      isAdult,
      bannerImage,
      coverImage{
      large, extraLarge
      },
    }
  }
}`

const variables = {
  search,
  page,
  perPage, //max 50
  type: 'ANIME',
  isAdult:false
};

// Define the config we'll need for our Api request
const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  },
  body: JSON.stringify({
      query: query,
      variables: variables
  })
    };

const res = await fetch(url, options)
let {data} = await res.json() 
  return data
}



export async function getCharactersFromAnimeId(id:number , order:characterOrder){
  const query =`
  query ($id: Int, $page: Int, $perPage: Int ,  ){
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      },
      media ( id: $id ){
        id,
        title {
          romaji,
          english
        },
        type,
        format,
        season,
        seasonYear,
        status,
        popularity,
        episodes,
        chapters,
        popularity,
        genres,
        isAdult,
        bannerImage,
        coverImage{
        large, extraLarge
        },
        characters(page:1,perPage:50, sort:[${order}]){
          nodes{
            id,
            name{ first,last, full, native , alternative },
            gender,
            age,
            image{ medium , large },
            dateOfBirth {day,month},
            siteUrl
          }
        }
      }
    }
  }`
  

const variables = {
  id,
  page:1,
  perPage:20, //max 20
};

// Define the config we'll need for our Api request
const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  },
  body: JSON.stringify({
      query: query,
      variables: variables
  })


}
const res = await fetch(url, options)
let {data} = await res.json() 
  return data
}


export async function getCharacterInfo(id:number):Promise<getCharacterInfo>{
  const query =`
  query ( $id: Int ){
        Character( id : $id ){
            id,
            name{ first,last, full, native , alternative },
            gender,
            age,
            image{ medium , large },
            dateOfBirth {day,month},
            description,
            siteUrl
        }
  }`

const variables = {
  id
};

// Define the config we'll need for our Api request
const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  },
  body: JSON.stringify({
      query: query,
      variables: variables
  })

}
const res = await fetch(url, options)
let {data} = await res.json() 
  return data
}



interface getCharacterInfo{
  Character:characterQuery
}


import {  animeQuery , characterQuery , animeOrder , characterOrder } from "./interfaces";