import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import config from '../config.json'
import Timeline from '../src/components/Timeline'
import Header from '../src/components/Header/Index'
import Menu from '../src/components/Menu/Index'
import { CSSReset } from '../src/Styles/CSSReset'
export default function Home() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
    <CSSReset/>
    <div style={{
      display: "flex",
      flexDirection: "column",
      flex: 1,
  }}>

       <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/> 
       <Header/>
       <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/> 
    </div>
   
    </>
  )
  }

