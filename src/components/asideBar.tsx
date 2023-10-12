export default function AsideBar(props:propsState){

  
//-left-full
  return(
    <>
    {!props.state ?  (
      <aside className="bg-pink-300 fixed top-[62px] -translate-x-full transition-all h-screen m-0 p-0 w-1/5 z-50">
      <ul>
        <li>ITEM 1</li>
        <li>ITEM 2</li>
      </ul>
    </aside>
    ):(
      <>
      <aside className="bg-slate-800 fixed top-[62px] translate-x-0 h-screen m-0 p-0 w-1/5 z-50 transition-all ">
        <div className="fixed  left-full w-screen h-screen" onClick={props.hidden}></div>
        <ul>
          <li>ITEM 1</li>
          <li>ITEM 2</li>
        </ul>
      </aside>
      </>
    )}
    </>      
  )
}

import { useState } from "react"
import HamburguerMenu from "./hamburguerMenu"
import { propsState } from "@/interfaces"
