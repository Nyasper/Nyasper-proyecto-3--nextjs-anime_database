//Interfaces
export interface Anime {
  id:number,
  title:title,
  type:Type,
  format:Format,
  season:Season,
  seasonYear:number,
  status:Status,
  popularity:number,
  episodes:number|null,
  chapters:number|null,
  genres:string[],
  isAdult:boolean,
  bannerImage:string,
  coverImage:coverImage
}



interface title {
  romaji:string,
  english:string|null
}

interface coverImage{
  large:string,
  extraLarge:string
}

type Status = 
  'FINISHED'|
  'RELEASING'|
  'NOT_YET_RELEASED'|
  'CANCELLED'|
  'HIATUS'

type Format =
  'TV'|
  'TV_SHORT'| 
  'MOVIE'| 
  'SPECIAL'|
  'OVA'| 
  'ONA'|
  'MUSIC'|
  'MANGA'|
  'NOVEL'|
  'ONE_SHOT'

  type Type = 'ANIME'|'MANGA'

  type Season = 'WINTER'|'SPRING'|'SUMMER'|'FALL'


  export interface pageInfo {
    total:number,
    currentPage:number,
    lastPage:number,
    hasNextPage:boolean,
    perPage:number
    order?:animeOrder //opcional
  }

  export interface animeQuery {
    Page: {
      pageInfo:pageInfo,
      media:Anime[],
      params?:string
    },
  }

export interface getCharactersFromAnimeID{
    Page: {
      pageInfo:pageInfo,
      media:Anime[],
    },
}


export interface AnimeCharacters extends Anime{
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
      chapters:number|null,
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

export interface characterQuery{
    id:number,
    name: { 
      first:string,last:string,
      full:string,
      native:string,
      alternative:string
    },
    gender:string,
    age:string,
    image: {
      medium:string,
      large:string
    },
    dateOfBirth:{
      day:number,
      month:number
    },
    siteUrl:string,
    description:string
   }




  export type animeOrder = 
  "ID"|
  "ID_DESC"|
  "TITLE_ROMAJI"|
  "TITLE_ROMAJI_DESC"|
  "TITLE_ENGLISH"|
  "TITLE_ENGLISH_DESC"|
  "TYPE"|
  "TYPE_DESC"|
  "FORMAT"|
  "FORMAT_DESC"|
  "POPULARITY"|
  "POPULARITY_DESC"|
  "EPISODES"|
  "EPISODES_DESC"|
  "STATUS"|
  "STATUS_DESC"|
  "CHAPTERS"|
  "CHAPTERS_DESC"|
  "SEARCH_MATCH"


export type characterOrder = 
"ID"|
"ID_DESC"|
"ROLE"|
"ROLE_DESC"|
"SEARCH_MATCH"|
"FAVOURITES"|
"FAVOURITES_DESC"|
"RELEVANCE"

export interface linkInterface { name:string, route:string }

export interface params {
  params: {
    order: `${animeOrder}-${number}`;
  }
}
export interface propsState{
  state:boolean
  click?:MouseEventHandler
  hidden?:MouseEventHandler
  params?:string
}





interface searchAnime{
  order:string,
  page:number,
  search:string|null
}

import { MouseEventHandler } from "react"