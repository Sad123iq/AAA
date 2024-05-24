import React, { Fragment } from 'react'
import "./Home.scss"
import Perfect from '../../../components/section1/Perfect'
import Arrivals from '../../../components/section2/Arrivals'
import Popular from '../../../components/section3/Popular'
import Watch from '../../../components/section4/Watch'

const Home = () => {
  return (
    <Fragment>
      <Perfect/>
      <Arrivals/>
      <Popular/>
      <Watch/>
    </Fragment>
  )
}

export default Home
