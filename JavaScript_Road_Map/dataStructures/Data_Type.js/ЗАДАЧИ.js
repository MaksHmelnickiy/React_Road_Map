// ​‌‌‍⁡⁣⁣⁢STRING ⁡​/

// ⁡⁣⁣⁢Задача 1⁡ .
console.log('Задача 1')
function checkSpam(string) {
    let a = string.toLowerCase()
    if(a.includes('xxx') === true || a.includes('viagra') === true){
        return true
    }
    else{
        return false
    }
}

console.log(checkSpam('buy ViAgRA now')) // true 
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam('innocent rabbit')) // false

// ⁡⁣⁣⁢Задача 2⁡ .
console.log('Задача 2')
function  truncate(str, maxLength) {
    if(str.length > maxLength){
        str = str.slice(0, maxLength)
        return str + '...'
    }
}
console.log('Задача 2')
console.log(truncate('sdfdsgrdg gfdg df dfg dfgf fgdfgdf', 17))

// ⁡⁣⁣⁢Задача 3⁡ .
console.log('Задача 3')
function cur(str) {
    let a = str.indexOf('120')

    if(str.includes('120') === true){
        return +str.slice(a)
    }
}
console.log(cur('$120'))