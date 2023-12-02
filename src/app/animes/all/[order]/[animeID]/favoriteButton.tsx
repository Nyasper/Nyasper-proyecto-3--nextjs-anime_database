'use client'
export default function FavoriteButton(props:props){


  //Obtener los favoritos desde LocalStorage
  const favoritesJSON = localStorage.getItem('favorites');
  const favorites: Anime[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
  
  // Inicializa el estado de 'favorite' de cada boton en función de si props.mediaInfo está en la lista de favoritos
  const isFavorite = favorites.some((fav) => fav.id == props.mediaInfo.id);
  const [favorite, setFavorite] = useState(isFavorite);

  const addFavorite = (anime:Anime)=>{

    //Conseguir todos los favoristos desde el LocalStorage y los guarda en la constante favorites, si no hay nada se guarda un array vacio.
    if (!favorites.some((fav) => fav.id == anime.id)) {

      const favoritesJSON = localStorage.getItem('favorites');
      const favorites: Anime[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
      
      // Agrega el anime a la lista de favoritos
      favorites.push(anime);
      
      // Almacena la lista actualizada en el almacenamiento local
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }


    else {
      const favoritesJSON = localStorage.getItem('favorites');
      const favorites: Anime[] = favoritesJSON ? JSON.parse(favoritesJSON) : [];
      const updatedFavorites = favorites.filter((fav) => fav.id != anime.id);
  
      // Almacena la lista actualizada en el almacenamiento local
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    setFavorite(!favorite)
  }

  return favorite?(
    <button className="bg-red-900 text-lg px-2 rounded-lg" onClick={() => addFavorite(props.mediaInfo)}>Remove</button>
  ) : (
    <button className="bg-sky-400 text-lg px-2 rounded-lg" onClick={() => addFavorite(props.mediaInfo)}>Add Favorite</button>
  )
 
}

interface props{
  mediaInfo:Anime
}

import { Anime } from "@/interfaces";
import { useState } from "react"