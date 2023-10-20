//DOCUMENTATION : https://anilist.github.io/ApiV2-GraphQL-Docs/
const url = 'https://graphql.anilist.co'

export async function getAllAnimes( page:number , perPage:number , order:animeOrder):Promise<getAllAnimesQuery> {
const query =`
query ($id: Int, $page: Int, $perPage: Int,  $genre: String  , $type : MediaType , $isAdult : Boolean ){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    },
    media ( sort:[${order}] , id: $id, genre: $genre , type: $type ,  isAdult: $isAdult ){
      id,
      title { romaji },
      season,
      seasonYear,
      status,
      popularity,
      episodes,
      popularity,
      coverImage{
      large
      },
    }
  }
}`

const variables = {
  page,
  perPage, //max 50
  order,
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
const {data} = await res.json() 
  return data
}

export async function getAnimesBySearch(search:FormDataEntryValue|null , page:number, perPage:number):Promise<getAllAnimesQuery>{
  const query =`
query ( $page: Int, $perPage: Int , $search: String , $type : MediaType ,$isAdult : Boolean ){
  Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    },
    media (search: $search , type: $type , isAdult: $isAdult ){
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
      popularity,
      genres,
      isAdult,
      bannerImage,
      coverImage{
      large,
      extraLarge
      }
    }
  }
}`

const variables = {
  page,
  perPage, //max 50
  type: 'ANIME',
  search,
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
const {data} = await res.json() 
  return data
}


export async function getAnimeInfoByAnimeId(id:number,pageNumber:number):Promise<getAnimeInfoByAnimeIdQuery>{
  const query =`
  query ($id: Int, $page: Int, $perPage: Int  ){
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
        bannerImage,
        coverImage{
        large, extraLarge
        },
        characters(page:${pageNumber},perPage:20,sort:[ID]){
          nodes{
            id,
            name{ full },
            image{ large },
          }
        }
      }
    }
  }`
  

const variables = {
  id,
  page:1
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
const {data} = await res.json() 
  return data
}


export async function getCharacterInfoByID(id:number):Promise<getCharacterInfoByIDQuery>{
  const query =`
  query ( $id: Int ){
        Character( id : $id ){
            id,
            name{ first,last, full, native , alternative },
            gender,
            age,
            image{ medium , large },
            dateOfBirth {day,month},
            description(asHtml: true),
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
const {data} = await res.json() 
  return data
}
/*
const query =`
query ( $search: String ){
      Character( search : $search ){
          id,
          name{ first,last, full, native , alternative },
          gender,
          age,
          image{ medium , large },
          dateOfBirth {day,month},
          description(asHtml: true),
          siteUrl
      }
}`
*/


export async function getAllMangas( page:number , perPage:number , order:animeOrder):Promise<getAllAnimesQuery> {
  const query =`
  query ($id: Int, $page: Int, $perPage: Int,  $genre: String  , $type : MediaType , $isAdult : Boolean ){
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      },
      media ( sort:[${order}] , id: $id, genre: $genre , type: $type ,  isAdult: $isAdult ){
        id,
        title { romaji },
        format,
        season,
        seasonYear,
        status,
        popularity,
        chapters,
        popularity,
        coverImage{
        large
        },
      }
    }
  }`
  
  const variables = {
    page,
    perPage, //max 50
    order,
    type: 'MANGA',
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
  const {data} = await res.json() 
    return data
  }

interface getCharacterInfoByIDQuery{
  Character:characterQuery
}

export async function getAllCharacters(order:animeOrder):Promise<getAllCharactersInterface> {
  const query =`
  query ($type : MediaType , $page: Int, $perPage: Int ,  ){
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      },
      media ( sort:[${order}] ,type: $type ){
        id,
        title { romaji },
        popularity,

        characters(page:1,perPage:20,sort:[ID]){
          nodes{
            id,
            name{ full },
            image{ medium,large },
          }
        }
      }
    }
  }`
  

const variables = {
  type: 'ANIME',
  page:1,
  perPage:5
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
const {data} = await res.json() 
  return data
}



import {  getAllAnimesQuery , getAnimeInfoByAnimeIdQuery , characterQuery , animeOrder , getAllCharactersInterface , characterOrder } from "./interfaces";