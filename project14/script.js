// Создание элементов 

// 1. createElement() - метод создания элемента

// const header = document.querySelector("header") // находим элемент, куда будем добавлять созданный тег
// const title = document.createElement("h1") // создаю элемент
// title.innerText = "My title"
// header.appendChild(title) // добавляем созданный элемент(title - h1) в header

/*
    innerText - свойстсво текста внутри тега

    Алгоритм создания элемента
        1. Находим элемент, в который хотим положить созданный тег. querySelector()
        2. Создаем тег. createElement()
        3. Добавляем текст. innerText
        4. Добавляем созданный тег в найденный в п1 тег. appendChild()
*/

// 2. innerHTML - свойство, которое позволяет получить или назначить html содержимое тега
// const main = document.querySelector("main")
// console.log(main.innerHTML)

// // Задача. в header добавить h1 с текстом myTitle
// const header = document.querySelector("header")
// header.innerHTML = "<h1> My title </h1>"

// Задача. Создать цикл, который позволяет добавить 10 тегов p с тектом HELLO внутрь section
// const section = document.querySelector("section")
// section.innerHTML = "<p> Hello World </p>"
// section.innerHTML += "<p> Hello World 1</p>"
// section.innerHTML += "<p> Hello World 1</p>"
// section.innerHTML += "<p> Hello World 1</p>"
// section.innerHTML += "<p> Hello World 1</p>"
// section.innerHTML += "<p> Hello World 1</p>"

// for(let i = 0; i < 10; i++) {
//     section.innerHTML += "<p> Hello </p>"
// }

/*  
   1.  Свойство innerText позволяет считывать или задавать текстовое содержимое элемента. 
    При считывании текста с элемента будет возвращена строка с текстовым содержимым всех вложенных дочерних элементов. 

    2. Свойство innerHTML позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML.
*/

// const header = document.querySelector("header")
// header.innerHTML += "<h2> My title </h2>"

/*
    main = {
        innerText: "Мой текст",
        innerHTML: "<p>Мой текст<p>"
    }

    main.innerHTML = "<h1>Hello</h1>"

     main = {
        innerText: "Мой текст",
        innerHTML: "<h1>Hello</h1>"
    }
*/

/*
    метод querySelector возвращает null, если неправильно написали селектор
        или по заданному селектору тега в html нет
*/


/*
    <div>
        <h5>Hello</h5>
        <p>Text</p>
    </div>

    const div = createElement("div")
    div.innerHTML = `<h5>Hello</h5> <p>Text</p>`
*/

// Задача. Есть массив имен names. Для каждого имени создать тег p и добавить его в section
// const names = ["Arsen", "Yuliya", "Lana", "Maria"]

// const section = document.querySelector("section")
// for(let i = 0; i < names.length; i++) {
//     section.innerHTML += `<p class="text"> ${names[i]} </p>`
// }

/*
    names.length = 4
    1. let i = 0;  0 < 4 - true, section.innerHTML += `<p> Arsen </p>`, i++
    2. i = 1, 1 < 4 - true, section.innerHTML += `<p> Yuliya </p>`, i++
    3. i = 2, 2 < 4 - true, section.innerHTML += `<p> Lana </p>`, i++
    4. i = 3, 3 < 4 - true, section.innerHTML += `<p> Maria </p>`, i++
*/

// <p>Arsen </p>, <p>Yuliya</p>

// Задача. Есть массив объектов prodcuts. Для каждого продукта создать разметку
// Добавить разметку в section
// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 20000
//     },
//     {
//         name: "Iphone 15",
//         price: 25000
//     },
// ]
// const section = document.querySelector("section")

// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
//     section.innerHTML += `<div class="product">
//         <h5>${products[i].name}</h5>
//         <p>${products[i].price}</p>
//         </div> `
// }
// section.innerHTML += `<h1>Сумма продуктов составляет ${sum}</h1>`

// const sumTitle = document.createElement("h1")
// sumTitle.innerText =  `<h1>Сумма продуктов составляет ${sum}</h1>`
// section.appendChild(sumTitle)

// Добавить в разметку <h1></h1>, в котором должна быть общая стоимость всех продуктов
// 1. с помощью цикла for посчитать сумму всех продуктов
// 2. добавить h1 в конец section, в котором указать цену 

// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum += products[i].price
// }
// section.innerHTML += `<h1>Сумма продуктов составляет ${sum}</h1>`



// section.innerHTML += `<div class="product"> 
//                         <h5>${products[0].name}</h5>
//                         <p>${products[0].price}</p>
//                     </div> `

// section.innerHTML += ` <div class="product">
//                     <h5>${products[1].name}</h5>
//                     <p>${products[1].price}</p>
//                 </div> `

// section.innerHTML += ` <div class="product">
//                 <h5>${products[2].name}</h5>
//                 <p>${products[2].price}</p>
//             </div> `


/*
    `<div>
        <h5></h5>
    </div>`

    products[0].name
    <div class="product">
        <h5>Назввание продукта</h5>
        <p>Цена продукта</p>
    </div>
*/


// Задача. Есть массив products. 
// 1. Для каждого объекта в массиве products создать разметку
// 2. Отобразить только те продукты, цена которых больше 10000
// 3. Отобразить только те продукты, категория которых - phone

const products = [
    {
        name: "Iphone 13",
        category: "phone",
        price: 15000
    },
    {
        name: "Iphone 14",
        category: "phone",
        price: 20000
    },
    {
        name: "Acer",
        category: "laptop",
        price: 40000
    },
    {
        name: "Asus",
        category: "laptop",
        price: 35000
    },
    {
        name: "Samsung",
        category: "TV",
        price: 27000
    },
    {
        name: "LG",
        category: "TV",
        price: 7000
    },
]

/*
    <div class="product">
        <h3> {имя продукта} </h3>
        <p> {категория продукта} </p>
        <p> {цена продукта} </p>
        <button>Купить</button>
    </div>
*/