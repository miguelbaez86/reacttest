import React from 'react'
import {Item} from '../'

const ItemList = ({items, compare}) =>
  <div className="row mt-2">
      {items.map(item =>
        <Item key={item.id} item={item} compare={compare} />
      )}
  </div>;

export default ItemList
