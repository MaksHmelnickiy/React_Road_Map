// В ⁡⁢⁣⁣TypeScript⁡ имеются следующие ⁡⁣⁣⁢типы⁡:

// ⁡⁢⁣⁣boolean⁡: логическое значение true или false
let isDone: boolean = false;

// ⁡⁢⁣⁣number⁡: числовое значение
let decimal: number = 6;

// ⁡⁢⁣⁣string⁡: строки⁡
let color: string = "blue";

// ⁡⁢⁣⁣Array⁡: массивы
let list1: number[] = [1, 2, 3]; // первый способ
let list2: Array<number> = [1, 2, 3]; // второй способ

// ⁡⁢⁣⁣Any⁡: представляет тип, который может быть ⁡⁣⁣⁢абсолютно любым⁡. Это как "опция отключения типов" в TypeScript.. 
let looselyTyped: any = 4;
looselyTyped = "now it is a string";

// ⁡⁢⁣⁣Unknown⁡: представляет тип значения, который может быть "⁡⁣⁣⁢любым⁡". ⁡⁢⁢⁢Это немного безопаснее, чем использование типа any⁡.
let notSure: unknown = 4;
notSure = "maybe a string instead";

// ⁡⁢⁣⁣null⁡ и ⁡⁢⁣⁣undefined⁡: соответствуют значениям null и undefined в javascript
let u: undefined = undefined;
let n: null = null;

// ⁡⁢⁣⁣Never⁡: представляет тип значений, которые ⁡⁣⁣⁢никогда не происходят⁡. Например, функция, которая всегда выбрасывает ⁡⁢⁣⁢ошибку⁡, никогда ⁡⁢⁣⁢не возвращает значение⁡.
function errorNever(message: string): never {
    throw new Error(message);
}

// ⁡⁢⁣⁣Void⁡: это отсутствие каких-либо типов. 
// Чаще всего он используется в качестве возвращаемого типа ⁡⁣⁣⁢функций⁡, ⁡⁣⁣⁢которые не возвращают никакого значения⁡.
function warnUser(): void {
    console.log("This is my warning message");
}

// ⁡⁢⁣⁣Enum⁡: используется для ⁡⁣⁣⁢объявления перечисления⁡ — отдельного типа, который состоит из набора именованных констант, 
// называемого списком перечислителей.
enum Colors {Red='first', Green='second', Blue='third'}
let b: Colors = Colors.Green; // colors Green ⁡⁢⁣⁢нельзя перезаписать⁡ так как это ⁡⁢⁣⁣const⁡ /

// ⁡⁢⁣⁣Tuple⁡ (кортеж): представляет собой массив, ⁡⁣⁣⁢каждому⁡ из элементов которого можно ⁡⁣⁣⁢указать свой тип⁡. 
let x: [string, number];
x = ["hello", 10];


// ​‌‌‍⁡⁣⁣⁢Отличие ⁡⁢⁣⁣Any⁡ от ⁡⁢⁣⁣Never⁡⁡​ /
let valueAny: any;
valueAny.foo.bar;  // Нет ошибки

let valueUnknown: unknown;
// ⁡⁣⁢⁣valueUnknown.foo.bar⁡;  // ⁡⁢⁣⁢Ошибка⁡ /
// Это делает ⁡⁢⁣⁣unknown⁡ более безопасным ⁡⁢⁣⁢для⁡ использования, ⁡⁢⁣⁣чем any⁡, поскольку он ⁡⁣⁣⁢сохраняет обязательную проверку типа⁡.


// ++++++++++++++++++​‌‍‌⁡⁣⁣​‌‌‍⁡⁣⁣⁢Структуры (типы)⁡​⁡​+++++++++++++++++
// Обычно в TypeScript ⁡⁢⁣⁣не разделяют понятия типа и структуры⁡, потому что ⁡⁣⁣⁢структура тоже является типом⁡. 
// Но так как ⁡⁢⁣⁣структура⁡ – это ⁡⁣⁣⁢составной тип данных⁡, ⁡⁢⁢⁢который состоит из разных типов⁡, 
// сгруппированных под одним, ⁡⁣⁣к ним относятся: ⁡⁢⁢⁡⁢⁣⁣Enum⁡⁡, ⁡⁢⁣⁣Array⁡, ⁡⁢⁣⁣Tuple⁡,

