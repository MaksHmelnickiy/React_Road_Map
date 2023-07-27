import React, { useState, useCallback } from 'react';
import { ContextValue } from './context';
import { ChildComponent } from './child';

export const ParentComponent = () => {
  const [products, setProducts] = useState<Record<string, number>>({
    apple: 0,
    banana: 0,
    nut: 0,
  });

  const buyProduct = useCallback((product: string) => {
    setProducts((prevProducts) => ({ ...prevProducts, [product]: prevProducts[product] + 1 }));
  }, []);

  return (
    <div>
      <div>
        Busket: 
        <ul>
          <li>Apple: {products.apple}</li>
          <li>Banana: {products.banana}</li>
          <li>Nut: {products.nut}</li>
        </ul>
      </div>
      <ContextValue.Provider value={{ products, buyProduct }}>
        <ChildComponent />
      </ContextValue.Provider>
    </div>
  );
};