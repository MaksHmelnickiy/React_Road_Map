import { ADD_TO_CART, APPLY_DISCOUNT, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./action";

export const addToCart = (id:number) => ({type: ADD_TO_CART, payload: id});
export const removeFromCart = (id: number) => ({type: REMOVE_FROM_CART, payload: id});
export const updateQuantity = (productId: number, quantity: number) => ({type: UPDATE_QUANTITY, payload: { productId, quantity }})
export const clearCart = () => ({
  type: CLEAR_CART
});
export const applyDiscount = () => ({type: APPLY_DISCOUNT})
