import { Basket } from "./elements/basket"
import { ListProducts } from "./elements/listProducts"

export const Task3Redux = () => {
  return <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <ListProducts />
    <Basket />
  </div>
}