
import { useDispatch, useSelector } from "react-redux"
import { IProduct, IProducts } from "../reducers"
import React from "react"
import { addToCart } from "../action_creator"


export const ListProducts = React.memo(() => {
  const products = useSelector((state: IProducts) => state.items)
  const dispatch = useDispatch()
  console.log(products)
  return (
    <ul>
    {
      products.map((product: IProduct, index) => {
        return <li key={index}>
          <h6>{product.title}</h6>
          <div>Price: {product.price}$</div>
          <div>
            <button type="button" onClick={() => dispatch(addToCart(product.id))}>ADD</button>
          </div>
        </li>
      })
    }
  </ul>
  )

})