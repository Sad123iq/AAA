import React from 'react'
import Header from '../../layout/site/header/Header'
import {Outlet} from "react-router-dom"
import Footer from '../../layout/site/footer/Footer'

const SiteRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default SiteRoot
