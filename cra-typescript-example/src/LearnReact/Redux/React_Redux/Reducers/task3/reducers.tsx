import { ADD_TO_CART, APPLY_DISCOUNT, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./action";

const initialProducts = {
  items: [
    {
      id: 1,
      title: 'Футболка',
      price: 1000,
      quantity: 1
    },
    {
      id: 2,
      title: 'Джинсы',
      price: 2500,
      quantity: 1
    },
    {
      id: 3,
      title: 'Кроссовки',
      price: 3500,
      quantity: 1
    },
    {
      id: 4,
      title: 'Рюкзак',
      price: 1500,
      quantity: 1
    }
  ],
  cart: []
};
export interface IProduct {
  id: number
  title: string
  price: number
  quantity: number
}
export interface IProducts {
  items: IProduct[]
  cart: IProduct[]
}
export const reducers = (state: IProducts = initialProducts, action: any) => {
  // Небольшое инфо / 
  // Первый ⁡⁣⁣⁢IProducts⁡ после state: указывает тип входного параметра state.
  // Второй ⁡⁣⁣⁢IProducts⁡ после стрелки => указывает тип возвращаемого значения функции.
  
  switch (action.type) {
    case ADD_TO_CART: 
      const current = state.items.find(item => item.id === action.payload)
      if(current){
        const inCart = state.cart.find(item => item.id === current.id)
        if (inCart) {
          return {
            ...state,
            cart: state.cart.map(item => item.id === current.id ? {...item, quantity: item.quantity + 1} : item)
          }
        }
        return {
          ...state,
          cart: [...state.cart, {...current}]
        }
      }
      return state;
    case REMOVE_FROM_CART: 
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    case UPDATE_QUANTITY: 
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    case APPLY_DISCOUNT: 
      return {
        ...state,
        cart: state.cart.map(item => {
          return {
            ...item,
            price: item.price * 0.9
          }
        })
      }
    default:
      return state;
  }
}