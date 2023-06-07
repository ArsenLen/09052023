// Массивы и циклы
// const names = ["Alexander", "Yuliya", "Arsen"]

// // В консоли отобразить имя Yuliya из массива names
// console.log(names[1]) 

// // Создать массив, в котором будут след. числа - 10, 15, 0, 100, 21
// // Отобразить в консоли число 0
// const numbers = [10, 15, 0, 100, 21]
// console.log(numbers[2])

// const arr = ["Hello", 100, true, ["Hello", "Hello World"]] // в массиве могут храниться разные типы данных

// const countries = ["Germany", "France", "UK"]
// console.log(countries.length) // 3

// countries.push("Spain") // добавляем строку Spain
// console.log(countries.length) // 4

// countries[countries.length - 1] // countries[4 -1] // countries[3]

// Есть массив names. Нужно попросить пользователя ввести имя, введенное имя нужно добавить
// в массив names, используя метод push.
// Изменить таким код таким образом, чтобы у пользователя запрашивалось имя дважды и оба
// добавить в массив names.
// const names = ["Alexander", "Yuliya", "Arsen"]
// const username = prompt("Ввести имя")
// const username1 = prompt("Ввести еще имя")
// names.push(username, username1)
// console.log(names)


/*
    свойство length - длина массива или количество элементов в нем
    Для того, чтобы обратиться к последнему элементу массива можно использовать - (length - 1)
    
    метод push() позволяет добавить значение в конец массива
    
    массив - коллекция данных, нумерованный список. 
    В массиве можно храниться различные данные,
        например коллекцию чисел, коллекцию строк и т д
        Элементов в массиве может быть сколько угодно,
        каждый элемент хранится под своим номером(индексом)
    
    1. число 
    2. строка
    3. булевый тип - true/false - правда или ложь, верно или неверно
    4. массив (объект)
*/

// const users = [
//     {
//         name: "Arsen",
//         age: 25,
//         hobbies: ["Football", "Design", "Box"]
//     },
// ]


/*
    Цикл - повторяющиеся действия
*/

// В консоли 10 раз отобразить "Hello". 
// for(let i = 0; i < 10; i++) {
//     console.log("Hello")
// }
/*
    i < 10
    1. let i = 0, 0 < 10 - true, console.log("hello"), i++ -> i = 1
    2. i = 1, 1 < 10 - true, console.log("hello"), i++ -> i = 2
    3. i = 2, 2 < 10 - true, console.log("hello"), i++ -> i = 3
    4. i = 3, 3 < 10 - true, console.log("hello"), i++ -> i = 4
    5. i = 4, 4 < 10 - true, console.log("hello"), i++ -> i = 5
    6. i = 5, 5 < 10 - true, console.log("hello"), i++ -> i = 6
    7. i = 6, 6 < 10 - true, console.log('hello'), i++ -> i = 7
    8. i = 7, 7 < 10 - true, console.log("hello"), i++ -> i = 8
    9. i = 8, 8 < 10 - true, console.log("hello"), i++ -> i = 9
    10. i = 9, 9 < 10 - true, console.log("hello"), i++ -> i = 10
    11. i = 10, 10 < 10 - FALSE. Выход из цикла
*/


// Задача. В консоли отобразить текст "Hello World" 50 раз
// for(let i = 0; i < 50; i++) {
//     console.log("Hello World")
// }

// Задача. В консоли отобразить числа от 1 до 100 
// а. не включительно 100 
// б. включая 100
// for(let i = 0; i < 100; i++) {
//     console.log(i + 1)
// }

// Задача. В консоли отобразить все четные числа от 1 до 100
// for(let i = 0; i < 100; i++) {
//     if(i % 2 == 1) { // Если при делении на два в остатке 0 
//         console.log(i)
//     }
// }

/*
    1. i = 0, 0 % 2 ==
    2. i = 1, 1 % 2 = 1, - нечетное
    3. i = 2, 2 % 2 = 0, - четное.   2/2=1, значит в остатке 0. 2 делится на 2 без остатка
    4. i = 3, 3 % 2 = 1, - нечетное. 3/2=1, значит в остатке 1. 3 делится на 2, с остатком 1
*/

/*
    +, -, /, *

    % - оператор остатка от деления
    
        10 % 2 = 0.     10 / 2 = 5 в остатке 0
        11 % 2 = 1.     11 / 2 = 5 в остатке 1

        Четное число при делении на 2 в остатке дает 0
        Нечетное число при делении на 2 в остатке дает 1
*/

/*
    цикл for

    for(инициализация; условие; шаг) {
        тело цикла
    }

        1. инициализация - создаем счетчик. let i - iteration, итерация - повторение
        2. условие - момент до которого наш счетчик должен выполняться
        3. шаг - после каждого действия, увеличиваем шаг счетчика до момента завершения
            i++ - увеличение переменной на 1

        Алгоритм работы цикла:
            1. Выполняется начало - let i = 0
            2. Выполняется условие - i < 10
                Если условие true - выполняется действие в теле цикла - console.log("Hello")
               
            3. Выполняется шаг - увеличение переменной i на 1, Опять переходим к пункту 2

             Если false - выход из цикла

        let i = 0
        i = i + 1 // 1
        i+= 1
        i++ - инкремент

        i = i + 2
        i += 2 - 
        
*/


// Есть массив names. В консоли отобразить каждое имя из этого массива.
// const names = ["Arsen", "Sergey", "Bogdan", "Elena"]
// console.log(names[0]) // "Arsen"
// console.log(names[1]) // "Sergey"
// console.log(names[2]) // "Bogdan"

// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }
/*
    names.length = 4
    1. i = 0; 0 < 4 - true; console.log(names[0]); i++, i = 1
    2. i = 1; 1 < 4 - true; console.log(names[1]); i++, i = 2
    3. i = 2; 2 < 4 - true; console.log(names[2]); i++, i = 3
    4. i = 3; 3 < 4 - true; console.log(names[3]); i++, i = 4
    5. i = 4; 4 < 4 - FALSE. Выход из цикла. 
*/


// Задача. Есть массив numbers. Нужно вывести квардат каждого числа из этого массива
// С помощью цикла for.
// const numbers = [10, 20, 5, 11, 6, 4]

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] ** 2) // каждый элемент массива
//     // console.log(Math.pow(numbers[i], 2))
// }
/*
    100, 
    400,
    24,
    121,
    36,
    16
*/

// Задача. Есть массив строк. Нужно вывести в консоли каждую строку в верхнем регистре.
const countries = ["Germany", "France", "Spain", "Chech"]
const countriesUpperCase = []
// console.log(countries[0].toUpperCase())
// console.log(countries[1].toUpperCase())
// console.log(countries[2].toUpperCase())
// console.log(countries[3].toUpperCase())

for(let i = 0; i < countries.length; i++) {
    console.log(countries[i].toUpperCase()) // если хотим заполнить другой массив странами в верхнем регистре
    // еще действие с переменной upperCaseCoutr
}


/*
    string.toUpperCase()

    const name = "Arsen"
    name.toUpperCase()  --> "ARSEN"

    GERMANY
    FRANCE
    SPAIN
    CHECH
*/

/*
    names.length = 4 
    names.length - количество элементов, которое есть в массиве
*/


/*
    if(number > 100) 
    else {

    }
*/

