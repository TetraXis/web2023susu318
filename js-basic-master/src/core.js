//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    let x = parseFloat(n);
    return !isNaN(n) && (n | 0) === x;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let a = [];
    for (let i = 2; i <= 20; i += 2) {
        a.push(i);
    }
    return a;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    if (n >= 0) {
        return recSum(n);
    }
    else {
        return recSumNegative(n);
    }
}

function recSum(n) {
    if (n < 1) {
        return 0;
    }
    return recSum(n - 1) + n;
}

function recSumNegative(n) {
    if (n >= 0) {
        return 0;
    }
    return recSumNegative(n + 1) + n;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n == 0) {
        return false;
    }
    while (n > 2) {
        if (n % 2 != 0) {
            return false;
        }
        n /= 2;
    }
    return true;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let a = 1, b = 1, sum = 0;
    if (n > 0 && n < 3) {
        return 1;
    }
    if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
    }
    return sum;
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    if (typeof operatorFn === 'undefined' || operatorFn === null) {
        function delta() { return initialValue; }
        return delta;
    }
    function alfa(beta) {
        initialValue = operatorFn(initialValue, beta);
        return initialValue;
    }
    return alfa;
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    if (start === undefined) {
        start = 0;
    }
    if (step === undefined) {
        step = 1;
    }
    start = start - step;
    function generator() {
        start = start + step;
        return start;
    }
    return generator;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject !== firstObject && secondObject !== secondObject) {
        return true;
    }
    if (firstObject === secondObject) {
        return true;
    }
    else {
        if ((typeof firstObject == "object" && firstObject != null) && (typeof secondObject == "object" && secondObject != null)) {
            if (Object.keys(firstObject).length != Object.keys(secondObject).length) {
                return false;
            }
            for (var prop in firstObject) {
                if (secondObject.hasOwnProperty(prop)) {
                    if (!deepEqual(firstObject[prop], secondObject[prop])) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
    return false;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
