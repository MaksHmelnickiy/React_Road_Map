// ⁡⁢⁣⁣Enum⁡ (⁡⁢⁣⁣перечисление⁡) /

// тип ⁡⁢⁣⁣enum⁡ (enumeration) используется для определения набора именованных констант, ⁡⁣⁣⁢которые могут быть присвоены переменной этого типа⁡. 
// В отличие от JavaScript, в TypeScript ⁡⁢⁣⁣enum⁡ - это реальный тип, ⁡⁣⁣⁢который компилируется в объекты JavaScript⁡.

let isString = 'str1';
enum isEnumAnimal {cat, rabbit, horse};
console.log('isString - ' + typeof isString)
console.log('isEnumAnimal - ' + typeof isEnumAnimal)

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
  
let c: Color = Color.Green;
console.log(c); // выведет 2
  
let colorName: string = Color[4];
console.log(colorName); // выведет 'Blue'
