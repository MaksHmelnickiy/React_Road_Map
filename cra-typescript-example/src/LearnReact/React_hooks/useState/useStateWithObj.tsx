import React, { useState, ChangeEvent } from 'react';

interface MyState {
  name: string;
  age: number;
  married: boolean;
}

export const MyUseStateWithObject = () => {
  const [state, setState] = useState<MyState>({
    name: '',
    age: 0,
    married: false
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // вытягиваем ⁡⁢⁣⁣name⁡ из ⁡⁣⁣⁢input⁡ /
    setState(prev => ({ // задаем ⁡⁢⁣⁣предыдущее⁡ значение, чтобы все поля ⁡⁣⁣⁢сохранялись⁡, а не так что одно записали друго ⁡⁢⁣⁢стерлось⁡ /
      ...prev,
      [name]: name === 'age' ? Number(value) : name === 'married' ? !!value : value
    })
    // реализация через ⁡⁢⁣⁣if else как пример⁡ ,
    // if (name === 'name') {
    //   setState(prev => ({
    //     ...prev,
    //     name: value
    //   }));
    // } else if (name === 'age') {
    //   setState(prev => ({
    //     ...prev,
    //     age: Number(value)
    //   }));
    // } else if (name === 'married') {
    //   setState(prev => ({
    //     ...prev,
    //     married: !!value
    //   }));
    // }
    )}
  

  return (
    <div>
      <h1>useState work with <b>Object</b></h1>
      <input type="text" name='name' onChange={onChange} />
      <input type="text" name='age' onChange={onChange} />
      <input type="text" name='married' onChange={onChange} />
      <ul>
        <li>{state.age}</li>
        <li>{state.name}</li>
        <li>{state.married ? 'Married' : 'Not Married'}</li>
      </ul>
    </div>
  );
};
