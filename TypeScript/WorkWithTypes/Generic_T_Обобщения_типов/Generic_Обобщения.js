"use strict";
// ⁡⁢⁣⁣T⁡ представляет ⁡⁣⁣⁢параметр типа⁡ (type parameter) или ⁡⁣⁣⁢типовую переменную⁡ (type variable) и используется для ⁡⁣⁣⁢обобщений⁡ (generics). /
// Он является ⁡⁣⁣⁡⁢⁣⁣placeholder'ом⁡⁡ (заполнителем) для конкретного ⁡⁣⁣⁢типа данных⁡, который будет указан при использовании ⁡⁣⁣⁢обобщенного компонента⁡, ⁡⁣⁣⁢функции⁡ или ⁡⁣⁣⁢класса⁡.
var useGenericState = function (initialValue) {
    var _a = React.useState(initialValue), state = _a[0], setState = _a[1];
    var updateState = function (value) {
        setState(value);
    };
    return [state, updateState];
};
var _a = useGenericState(0), count = _a[0], setCount = _a[1];
