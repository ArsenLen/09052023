// DOM и навигация по DOM

// поиск по тегу
// const title = document.querySelector("h1")
// console.log(title.innerText) // "Hello World"
// title.innerText = "Hello Arsen"

// // поиск по классу
// const descr = document.querySelector(".descr")
// console.log(descr)

// // Найти элементы
// // а) найти тег ссылки на гугл
// // б) найти тег с классом footer
// // в) найти заголовок в main

// const googleLink = document.querySelector("main a")
// googleLink.innerText = "Facebook"
// console.log(googleLink)

// const footerText = document.querySelector(".footer")
// footerText.innerText = "Hello"

// const title1 = document.querySelector("h2")
// title1.innerText = "TITLE"

// Поменять текст внутри ссылки гугл на "Facebook"
// Поменять текст внутри тега с классом footer на Hello
// Поменять текст внутри h2 на TITLE

/*
    setAttribute - метод позволяет поменять атрибут
*/

/*
    <img> 
    <div class="item">
        <img src="img">
    </div>

    Вложенный селектор
    .item img { 

    }




    innerText - свойство получить или назначить текст внутри тега
    title = {
        innerText: "Hello World"
    } 
    
    let user = {
        name: "Arsen"
    }
    user.name
*/
/*
    querySelector() - поиск первого элемента по селектору
    querySelectorAll() - поиск всех элементов по селектору

    селектор - выбор из html
        1. по тегу - h1, header, main {}
        2. по классу - .item, .user
        3. по id - #

        функция

        function greeting() {
            console.log("Hello")
        }

        метод 

        let user = {
            key: value,
            greeting: function() {
                console.log("hello")
            }
        } 
*/

/*
    числа
    строки
    буль
    объекты (массивы) - 
        let user = {
            name: "Arsen"
        }

    main = {
        className: "main"
        innerHTML: "<h1></h1>"
        style: {
            backgroundColor: "red"
        }
    }
*/

// Добавить к тексту внутри h1. "Это мой первый заголовок"

// const title = document.querySelector("h1") 
// title.innerText += ". Это мой первый заголовок"

// const text = "hello"
// text = text + "world"

/*
    title.innerText = title.innerText + ". Это мой первый заголовок"

    let number = 10
        number + 5
        console.log(number) // 10

    number = number + 5
    number += 5

    number = number + 1
    number += 1
    number++ - инкремент

*/

// Задача. Поменять текст во всех тегах p на "Привет. Как дела?"
// Переписать код используя цикл for
// const texts = document.querySelectorAll("p")
// // texts[0].innerText = "Привет. Как дела?"
// // texts[1].innerText = "Привет. Как дела?"
// // texts[2].innerText = "Привет. Как дела?"

// for(let i = 0; i < texts.length; i++) {
//     texts[i].innerText = "Привет. Как дела?"
// }

/*
    nodeList.length - длина списка или количество найденных элементов
*/

// const array = [10, 20, 30, 50]
// console.log(array)

/*
    const names = ["Arsen", "Lana", "Bogdan"]
    const numbers = [10, 20, 30, 40, 50]

    const texts = [
        {
            innerText: "Lorem...."
        },
        {
            innerText: "Lorem...."
        }, 
        {
            innerText: "Lorem...."
        }
    ]
    texts[0].innerText
    texts.innerText

*/

// Поменять текст у тега googleLink на "Facebook" и поменять ссылку на "facebook.com"
// const googleLink = document.querySelector("main a")
// googleLink.innerText = "Facebook"
// googleLink.setAttribute("href", "https://fb.com")
const href = googleLink.getAttribute("href")
// console.log(href)

// Задача. Поменять у всех ссылок текст на Instagram
// Ссылку у всех тегов поменять на https://instagram.com

const links = document.querySelectorAll("a") // [{}, {}]
for(let i = 0; i < links.length; i++) {
    links[i].innerText = "Instagram"
    links[i].setAttribute("href", "https://instagram.com")
}


const vylet = +prompt("Во сколько вылетаете?")
const duration = +prompt("Сколько вреемени потребуется")

/*
    16+8=24
    20+8=28
*/

/*
    getAttribute(attr) - метод, для получения значение атрибута тега
        attr - название атрибута, значение которого мы хотим получить
    setAttribute(attr, value) - метод, для назначения атрибута
        attr - название атрибута, значение которого мы хотим изменить
        value - значение, на которое хотим поменять 
*/