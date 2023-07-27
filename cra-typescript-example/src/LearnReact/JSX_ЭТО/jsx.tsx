import React from "react";

export {};

// ⁡⁢⁣⁣JSX⁡ - это синтаксис, который используется в React ⁡⁣⁣⁢для описания структуры пользовательского интерфейса⁡. 
// Он очень ⁡⁢⁣⁣похож на HTML⁡, но с некоторыми отличиями и расширениями.

// Синтаксис ⁡⁢⁣⁣JSX⁡ позволяет вам писать ⁡⁣⁣⁢элементы и компоненты⁡ React прямо ⁡⁢⁣⁣в JavaScript⁡. Вот пример:
// Есть ⁡⁣⁣⁢два варианта⁡ записи JSX элементов. 

// ⁡⁣⁣⁢1 варивант⁡ .
const first = <h1 className="title">Hello, world!</h1>

// ⁡⁣⁣⁢2 вариант⁡ .
const second = React.createElement('h1', {className: 'title'}, 'Hello, world!')