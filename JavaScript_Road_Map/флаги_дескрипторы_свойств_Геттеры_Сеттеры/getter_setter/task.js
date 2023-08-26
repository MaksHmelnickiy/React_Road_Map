// Задача: Учет банковского счета без классов

// Ваша задача - создать объект для учета банковского счета без использования классов. 
// Используйте функции (геттеры и сеттеры) для управления данными счета и проверки минимального баланса.

// Создайте объект bankAccount с двумя свойствами: balance (начальный баланс) и minBalance (минимальный допустимый баланс).

// Создайте геттер currentBalance, который будет возвращать текущий баланс счета.

// Создайте сеттер deposit(amount), который позволит вносить деньги на счет. Проверьте, что сумма депозита положительная, и обновите баланс.

// Создайте сеттер withdraw(amount), который будет позволять снимать деньги со счета. Проверьте, что сумма снятия положительная
//  и не превышает текущий баланс. Если сумма снятия больше текущего баланса, выведите сообщение о недостатке средств.

// Создайте геттер isBalanceLow, который будет возвращать true, если текущий баланс меньше минимально допустимого баланса,
//  и false в противном случае.

const bankAccount = {
  balance: 300,
  minBalance: 50,
  get currentBalance(){
    return this.balance
  },
  set deposit(amount){
    if(amount > 0){
      return this.balance += amount
    }
    return console.error('Депозит должен быть больше нуля')
  },
  set withdraw(amount){
    if(this.balance > amount && amount > 0){
      return this.balance -= amount
    }
    return console.error('Недостаточно средств')
  },
  get isBalanceLow(){
    if(this.balance < this.minBalance){
      return true
    }
    return false
  }
}

console.log(bankAccount.currentBalance)
bankAccount.deposit = 100
console.log(bankAccount.currentBalance)
bankAccount.withdraw = 100
console.log(bankAccount.currentBalance)
console.log(bankAccount.isBalanceLow);