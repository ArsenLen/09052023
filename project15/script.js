// События и их обработка


// Задача. при клике на кнопку btn, в консоли отобразить "приветствую!"
// const btn = document.querySelector(".btn")
// btn.addEventListener("click", function() {
//     console.log("приветствую!")
// })

// Задача. При нажатии на кпноку btn увеличивать значение в p.text на 1 
// а при нажатии на минус 1 уменьшать значение в p.text на 1, минимальное значение - 0

// const btn = document.querySelector(".btn")
// const text = document.querySelector(".text")
// const btnMinus = document.querySelector(".btn-minus")
// let num = 0 // число, которое хранит текущее значение 

// btn.addEventListener("click", function() {
//     num++ // num = num + 1
//     text.innerText = num
// })

// btnMinus.addEventListener("click", function() {
//     if(num > 0) {
//         num-- 
//         text.innerText = num
//     }
// })

/*
     > 
    1. Действие выполняется только тогда, когда значение больше 0
        если значение = 1, то действие выполняется
        если значение = 0, то не выполняется 

        >=
    2. Дейтсвие выполняется только тогда, когда значение больше или равно 0
        если значение = 1, то действие выполняется
        если значение = 0, то действие выполняется
        если значение = -1, то не выполняется
*/

/*
    нельзя использовать тире или дефис в названии переменной
    btn-minus - такой переменной быть не может
    btn-plus - 
*/

/*
    1. num = 0
    2. когда кликаем, увеличиваем num на 1 
    3. меняем текст в теге p на переменную num
*/

/*
    num = num + 1 
*/

 /*
    1. Создаем переменную для хранения текущего значения числа. const num = 0
    2. При клике увеличиваем переменную на 1
        2.1. Повесить слушатель события на кнопку
        2.2. Вызывать cb функцию, которая увеличивает переменную на 1
    3. меняем текст в теге p на значение переменной. text.innerText = num
 */



// function sum() {
//     console.log("ваша сумма Х")
// }
// sum() // immediately invoke function - немедленный вызов функции

/*
    addEventListener - метод, который позволяет вызвать функцию по происшествии какого-либо события

    addEventListener(type, cb) - принимает два аргумента
    type - тип события - click, scroll, submit, change, input
    cb - callback function - функция обратного вызова, функцию вызываем не мы, а какая-то другая функция
*/


// Задача. При нажатии на кнопку менять цвет фона body на соответствующий
// менять цвет текста внутри нажатой кнопки на черный
const redBtn = document.querySelector(".red-btn")

redBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"
    redBtn.style.color = "black"
})

/*
    ДЗ. При нажатии на каждую из кнопок менять цвет фона body на соответвующий
        При нажатии на кнопку img-btn менять фон body на картинку.

    
*/




/*
    querySelector("body")

    document.body - обращение к тегу body 

    main = {
        innerText: "Текстовое содержимое",
        innerHTML: "<h1>Текстовое содержимое</h1>",
        style: {
            backgroundColor: ""
        }
    }
    main.style.backgroundColor = "red"

    строка
    число
    объект
    буль
    bigInt
    symbol
    
*/
