// Тип ⁡⁢⁣⁣Array⁡ используется для указания элементов массива. Определить массив можно ⁡⁣⁣⁢двумя способами⁡:

// 1 Вариант 
let isArrOfStr: string[] = ['string1', 'string2'];
let isArrOfNum: number[] = [1, 2, 3, 4, 5];
console.log('Variant N1:' + isArrOfNum[4] + ', Тип: ' + typeof isArrOfNum)

// 2 Вариант 
let isArrOfStr2: Array<string> = ['string1', 'string2'],
  isArrOfNum2: Array<number> = [1, 2, 3, 4, 5]
console.log('Variant N2:' + isArrOfNum2[4] + ', Тип: ' + typeof isArrOfNum2)