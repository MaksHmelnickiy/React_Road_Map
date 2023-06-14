// Хук ⁡⁢⁣⁣useState⁡ в React позволяет ⁡⁣⁣⁢управлять состоянием⁡ в функциональных компонентах. 
// Он возвращает пару значений: ⁡⁣⁣⁢текущее состояние⁡ и ⁡⁣⁣⁢функцию для его обновления⁡

import React, { useState } from 'react';
export const MyUseState:React.FC = () => {
const [state, setState] = useState<number>(0);

const upClick = () => {
    return setState(state + 1)
}
const downClick = () => {
    if(state <= 0){
        return;
    }
    return setState(state - 1 )
    } 
    return (
        <div>
            <button onClick={upClick}>+</button>
            <button onClick={downClick}>-</button>
            <div>useState: {state}</div>
        </div>
    )
}