import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProducts, IProduct } from '../reducers';
import { applyDiscount, clearCart, removeFromCart, updateQuantity } from '../action_creator';

export const Basket = () => {
  // Используем useSelector для получения только добавленных товаров (которые есть в корзине)
  const [disable, setDisable] = React.useState(false)
  const cartItems = useSelector((state: IProducts) => state.cart);
  const dispatch = useDispatch()
  const onCountPlus = (item: IProduct) => {
    const newCount = item.quantity + 1; // Увеличиваем количество товара на 1
    dispatch(updateQuantity(item.id, newCount)); // Обновляем количество в store
  }
  const onCountMinus = (item: IProduct) => {
    const newCount = item.quantity - 1; // Увеличиваем количество товара на 1
    dispatch(updateQuantity(item.id, newCount)); // Обновляем количество в store
  }

  const onDiscount = () => {
    dispatch(applyDiscount())
    setDisable(true)
  } 
  
  const summary =  cartItems.reduce((acum, el)  => {
    return (el.price * el.quantity ) + acum
  }, 0)

  
  return (
    <div style={{ border: '1px solid gray', margin: '30px', padding: '20px', minWidth: '300px' }}>
      <h3 style={{ textAlign: 'center' }}>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item: IProduct, index) => (
            <li key={index} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <div>
                <h6>{item.title}</h6>
                <div>Price: {item.price}$</div>
                <div>Quantity: {item.quantity}</div>
                <button type='button' onClick={() => onCountMinus(item)}>Minus</button>
                <button type='button' onClick={() => onCountPlus(item)}>Plus</button>
              </div>
              <button type='button' onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Summary</h4>
      <div><b>{summary}</b></div>
      <p></p>
      <button type='button' onClick={onDiscount} disabled={disable}>'Discount'</button>
      <p></p>
      <button type='button' onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};
