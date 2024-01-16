"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    fio = fio.split(" ");
    return fio[1] + " " + fio[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const set = new Set();
    for (let i = 0; i < array.length; i++) {
        set.add(array[i]);
    }
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array === undefined || array.length == 0) {
        return false;
    }
    function getMin(acc, item, index, arr) {
        const min = Math.min(acc, item);
        return min;
    }
    function getMax(acc, item, index, arr) {
        const max = Math.max(acc, item);
        return max;
    }
    return array.reduce(getMax, -1000) / array.reduce(getMin, 1000);
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.map = new Map();
    }
    set(str1, str2) {
        if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1 === null || str2 === null || str1 === "" || str2 === "" || str1 === undefined || str2 === undefined || this.get(str1) === str2) {
            return false;
        }
        this.map.set(str1, str2);
        return true;
    }
    get(str) {
        return this.map.get(str);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
