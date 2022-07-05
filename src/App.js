import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
    <ListOfPhotoCards />
  </div>

)
