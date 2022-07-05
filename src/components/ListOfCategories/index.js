import React from 'react'
import { Category } from '../Category'
import db from '../../../api/db.json'

import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {db.categories.map((category) => (
        // eslint-disable-next-line react/jsx-key
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
