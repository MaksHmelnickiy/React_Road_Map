// ⁡⁢⁣⁣throw⁡: Это ключевое слово в JavaScript, которое используется для явного выбрасывания ⁡⁣⁣⁢исключения⁡. 
// Когда выполнение программы ⁡⁣⁢⁣достигает оператора⁡ ⁡⁢⁣⁣throw⁡, оно ⁡⁢⁣⁢прерывается⁡, и ⁡⁣⁣⁢управление передается ⁡⁢⁣⁣ближайшему⁡ ⁡⁣⁣⁢блоку кода⁡⁡.
// ⁡⁢⁣⁣throw⁡ в основном используется для ⁡⁣⁣⁢обработки⁡ ⁡⁢⁣⁢ошибок⁡ /

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Этот вызов приведет к исключению
} catch (error) {
  console.error(error.message); // Выведет: Division by zero is not allowed
}