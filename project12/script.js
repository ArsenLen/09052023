// функции 

// function makeFood() {
//     console.log("Нарезать овощи")
//     console.log("Сварить овощи")
//     console.log("Заправить овощи майонезом")
//     console.log("Перемешать овощи")
// }

// makeFood() // первый раз приготовили
// makeFood() // второй раз приготовили
// makeFood() // третий раз приготовили
// makeFood() // четвертый раз приготовили

// Задача. Создать функцию, которая получает имя пользователя, переводит его в верхний регистр
//  и в консоли отображает 
// "Привет, {переданное имя}"

// function greeting(name) {
//     const newName = name.toUpperCase()
//     console.log("Привет, " + newName) // `${}`
// }

// greeting("Arsen") 
// greeting("Pavel")
// greeting("Vladyslav")


// Задача. Создать функцию, которая получает два числовых параметра и в консоли выводит
// а) сумму чисел
// б) разность 
// в) произведение
// г) деление

// function calc(num1, num2) {
//     console.log(num1 + num2)
//     console.log(num1 - num2)
//     console.log(num1 * num2)
//     console.log(num1 / num2)
// }

// calc(100, 20)
// calc(50, 5)

// Задача. Создать функцию, которая получает два числа и в консоли выводит наибольшее из них

// function max(num1, num2) {
//     if(num1 > num2) {
//         console.log(num1)
//     }  else if(num2 > num1) {
//         console.log(num2)
//     }
// }
// max(100, 20)
// max(20, 100)


// Задача. Создать цикл, который выводит в консоль числа от 0 до 9
// for(let i = 0; i < 20; i++) {
//     console.log(i)
// }
// for(let i = 0; i < 50; i++) {
//     console.log(i)
// }
// Задача. Создать функцию, которая принимает число и выводит все числа от 0 до числа,
// которое принимаем в параметре
// fn(10) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// function printNumbers(number) {
//     for(let i = 0; i < number; i++) {
//         console.log(i)
//     }
// }
// printNumbers(50)

// Задача. Создать функцию, которая принимает массив и отображает каждый элемент массива 
// в консоли
// function printArrayElements(array) {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// } 

// printArrayElements(["Arsen", "Alexander", "Vladimir"])
// printArrayElements([1, 2, 3, 4, 5, 6, 7])

// const names = ["Arsen", "Alexander", "Vladimir"]
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7]
// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }


// Задача. Создать функцию подсчета площади комнаты. 
// Она должна принимать длину и ширину, а в консоли отображать площадь
// площадь равна произведению ширины на длину. S = a * b
// function calcSquare(a, b) {
//     console.log(a * b)
// } 
// calcSquare(10, 15)


// Задача. Создать функцию, которая будет поздравлять пользователя с днем рождения
// Она должна принимать имя пользователя и в консоли отображать поздравление
// "Привет, ${имя}, Поздравляю с днем рождения!"
// function congrats(name) {
//     console.log(`Привет, ${name}, Поздравляю с днем рождения`)
// }

// congrats("Arsen")


// Задача. Создать функцию, которая получает число и в консоли отображает "Четное", если
// число четное, иначе - "Нечетное"
// function evenOrOdd(number) {
//     if(number % 2 == 0) {
//         console.log("Четное")
//     } else {
//         console.log("Нечетное")
//     }
// }

// evenOrOdd(16)

// Задача. Создать функцию, которая принимает число и выводит массив с числами
// от 0 до этого числа. 
// function showArray(number) {
//     const arr = []
//     for(let i = 0; i < number; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// showArray(10)

/*
    show - показать
    get - получить
    delete - удалить
    change - изменить
    print - распечатать
    add - добавить
    edit - редактировать 
    calc - посчитать
*/



// for(let i = 0; i < 20; i++) {
//     console.log("hello")
// }

// const array = [10, 20, 30, 40, 50]
// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

/*
    fn(5) ---> [0, 1, 2, 3, 4, 5]

    array - массив fn(array) { array.length }

    fn([1, 2, 3, 4, 5]) // 
    fn(["Arsen", "Alexander", "Vladimir"]) // 

    1. Функция всегда должна содержать глагол - действие, которое она будет выполнять
    2. Описать параметры функции - что она принимает(?)
    3. определиться, что возвращает

    Привет {введенное имя}. Вам {N} лет

    `Привет ${name}. Вам ${age} лет` - интерполяция
    "Привет " + name + ". Вам" + age + " лет"  
*/
/*
    функция - это переиспользуемый блок кода.

    Function Declaration 
    function Name(параметр1, параметр2...) {
        тело функции - алгоритм действий функции
    }
    параметр - входные данные, с которыми работает функция


    Math.power(10, 2) - 10 - число, 2 - степень, в которую нужно возвести число
 */

// Задача. Создать функцию, которая запрашивает у пользователя 3 имени, с помощью for.
// Каждое введенное имя перевести в верхний регистр - toUpperCase()
// Создать массив, в который положить все имена в верхнем регистре
// В консоли отобразить итоговый массив 


function printNames() {
    const names = []
    for(let i = 0; i < 3; i++) {
        const name = prompt("Введите ваше имя")
        const upperCasedName = name.toUpperCase()
        names.push(upperCasedName)
    }
    console.log(names)
}

printNames()

/*
    var int = 10
    var string = "Hello"
*/


/*
    1. let i = 0; 0 < 3 - true, const name = prompt("Введите ваше имя") -> 
            upperCasedName = "ARSEN"
            names.push("ARSEN") -> ["ARSEN"]
            , i++

    2. i = 1; 1 < 3 - true, prompt("Введите ваше имя")
            upperCasedName = "MARIA"
            names.push("MARIA") -> ["ARSEN", "MARIA"]
            , i++

    3. i = 2; 2 < 3 - true, prompt("Введите ваше имя"),
            upperCasedName = "VIKTOR",
            names.push("VIKTOR") -> ["ARSEN", "MARIA", "VIKTOR"]
            i++

    4. i = 3; 3 < 3 - false. 
*/