import React from 'react'

import { Header } from '../components/header'
import { Banner } from '../components/content/Banner'
import { CardPromo } from '../components/content/Cards'

export default function Page() {
  return (
    <>
      <Header />
      <Banner />
      <CardPromo />
    </>
  )
}