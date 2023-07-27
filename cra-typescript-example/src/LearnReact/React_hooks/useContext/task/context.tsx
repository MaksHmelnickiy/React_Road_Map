// ⁡⁣⁣⁢Задача⁡ .
// Управление корзиной:
// Создайте контекст для корзины покупок. Реализуйте функциональность добавления и удаления товаров из корзины. Затем создайте компонент CartProvider, предоставляющий этот контекст. 
// Используйте useContext в компонентах, отображающих содержимое корзины и позволяющих пользователю добавлять или удалять товары.


import { createContext } from "react";

// Вместо "number" используйте "string" для типа "product"

export interface IContext {
  products: {
    [key: string]: number;
  };
  buyProduct: (product: string) => void;
}

export const ContextValue = createContext<IContext>({
  products: {
    apple: 0,
    banana: 0,
    nut: 0,
  },
  buyProduct: () => {},
});