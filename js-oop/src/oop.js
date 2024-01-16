/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x, y) {
        this.x = 0;
        this.y = 0;
        if (x !== undefined) {
            this.x = x;
        }
        if (y !== undefined) {
            this.y = y;
        }
    }
    getR() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = 0;
        if (z !== undefined) {
            this.z = z;
        }
    }
    static vectorLength(a, b) {
        return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y) + (a.z - b.z) * (a.z - b.z));
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {
    constructor(input) {
        this.elements = {};
        this.start = 0;
        this.end = 0;
        if (input !== undefined) {
            for (let i = 0; i < input.length; i++) {
                this.enqueue(input[i]);
            }
        }
    }
    enqueue(element) {
        this.elements[this.end] = element;
        this.end++;
    }
    dequeue() {
        const item = this.elements[this.start];
        delete this.elements[this.start];
        this.start++;
        return item;
    }
    peek() {
        return this.elements[this.start];
    }
    get length() {
        return this.end - this.start;
    }
    get isEmpty() {
        return this.length === 0;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
