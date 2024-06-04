export {};
// ⁡⁢⁣⁣Генераторы экшенов⁡ (⁡⁢⁣⁣Action Creators⁡) — не что иное, как⁡⁣⁣⁢ функции⁡, которые ⁡⁣⁣⁢создают⁡ ⁡⁢⁣⁣экшены⁡. 
// Довольно просто путать термины “⁡⁣⁢⁣action⁡” и “⁡⁣⁢⁣action creator⁡,” поэтому постарайтесь использовать правильный термин.

// В Redux ⁡⁢⁣⁣генераторы экшенов⁡ (action creators) просто ⁡⁣⁣⁢возвращают⁡ ⁡⁢⁣⁣action⁡:
const ADD_TODO = 'ADD_TODO';
function addTodo(text: any) {
  return {
    type: ADD_TODO,
    text,
  };
}