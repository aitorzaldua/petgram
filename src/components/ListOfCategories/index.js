import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import db from '../../../api/db.json'
import { List, Item } from './styles'
/* import { categories as mockCategories } from '../../../api/db.json' */

export const ListOfCategories = () => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch('https://mocki.io/v1/14701bc5-e6ab-4393-a7b0-77724af93767')
      .then (res => res.json())
      .then (response => {
        setCategories(response)
      })

  }, []);

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
