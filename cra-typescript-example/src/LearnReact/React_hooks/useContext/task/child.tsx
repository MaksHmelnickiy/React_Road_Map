import { useContext } from 'react';
import { ContextValue } from './context';



export const ChildComponent = () => {
  const { products, buyProduct } = useContext(ContextValue);

  return (
    <>
      {Object.entries(products).map(([product, amount], key) => (
        <div key={key}>
          {product}: {amount} 
          <button onClick={() => buyProduct(product)}>Buy</button>
        </div>
      ))}
    </>
  );
};