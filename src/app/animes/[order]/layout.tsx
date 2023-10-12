'use client'
export default function OrderLayout({children}:any){

  const [activedMenu , setActivedMenu] = useState(false)
  const changeMenu = ()=> setActivedMenu(!activedMenu)
  const hiddenMenu = ()=> {
    if (activedMenu) setActivedMenu(false)
  }

  return(
    <>
    <HamburguerMenu state={activedMenu} click={changeMenu} />
    <AsideBar state={activedMenu} click={changeMenu} hidden={hiddenMenu} />
    {children}
    </>
  )
}

import { useState } from "react"
import AsideBar from "@/components/asideBar"
import HamburguerMenu from "@/components/hamburguerMenu"