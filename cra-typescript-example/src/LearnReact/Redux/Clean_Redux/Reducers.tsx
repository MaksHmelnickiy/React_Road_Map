export {};
// ⁡⁢⁣⁣Reducers⁡⁡ определяют, как ⁡⁣⁣⁢состояние⁡ приложения изменяется в ⁡⁣⁣⁢ответ на экшены⁡, отправленные в ⁡⁣⁣⁢стор⁡. 
// Помните, что ⁡⁢⁣⁣экшены⁡ только ⁡⁣⁣⁢описывают⁡, что произошло, но ⁡⁢⁣⁢не⁡ ⁡⁣⁣⁢описывают⁡, как изменяется ⁡⁣⁣⁢состояние⁡ приложения.

// ⁡⁢⁣⁣Редьюсер (reducer)⁡ — это ⁡⁣⁣⁢чистая⁡ функция, которая принимает ⁡⁣⁣⁢предыдущее состояние⁡ и ⁡⁣⁣⁢экшен⁡ (⁡⁣⁢⁣state⁡ и ⁡⁣⁢⁣action⁡) 
// и ⁡⁣⁣⁢возвращает⁡ следующее состояние (⁡⁣⁣⁢новую версию⁡ предыдущего). (previousState, action) => newState;


// ⁡⁢⁣⁢Очень важно⁡, чтобы редьюсеры ⁡⁣⁣⁢оставались чистыми функциями.⁡ Вот список того, чего никогда ⁡⁢⁣⁢нельзя делать⁡ в ⁡⁢⁣⁣редьюсере⁡:

// 1) Непосредственно изменять то, что ⁡⁣⁣⁢пришло в аргументах функции⁡;
// 2) Выполнять какие-либо ⁡⁣⁣⁢сайд-эффекты⁡: обращаться к API или осуществлять переход по роутам;
// 3) Вызывать ⁡⁢⁣⁢не⁡ ⁡⁣⁣⁢чистые функции⁡, например ⁡⁣⁢⁣Date.now()⁡ или ⁡⁣⁢⁣Math.random()⁡.