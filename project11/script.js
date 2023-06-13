// Объект 
// const array = ["Hello", "Hello World", 10, true] // [0, 1, 2, 3]
// console.log(array)

// const obj = {
//     // key: value 
// }

// const user = {
//     email: "test@mail.ru",
//     name: "Arsen",
//     age: 25,
//     hobbies: ["football", "design"],
//     info: {
//         descr: "Lorem Ipsum dolor sit amet"
//     }
// }
// console.log(user)
// console.log(user.name)
// console.log(user.hobbies[0]) // обращаемся к объекту, а потом к массиву 
// array[0].name

// Задача. Создать объект продукта со свойствами цены и названия
// Вывести в консоль значение цены.

// const product = {
//     name: "Iphone 13",
//     price: 10000,
// }
// console.log(product.price)

// const product2 = {
//     name: "Iphone 14",
//     price: 15000
// }

// Создать массив объектов products.
// У каждого должны быть свойства name, price
// Всего продуктов будет 3
// const products = [
//     {
//         name: "Iphone 13",
//         price: 10000
//     },
//     {
//         name: "Iphone 14",
//         price: 15000
//     },
//     {
//         name: "Iphone 15",
//         price: 20000
//     }
// ]


// Задача. Посчитать сумму стоимости всех продуктов в массиве products и вывести в консоли
// let sum = 0
// for(let i = 0; i < products.length; i++) {
//     sum = sum + products[i].price
//     // sum += products[i].price
// } 
// console.log(sum)

// let num = 30
// num = num + 20 // num = 50.       num = 
// num += 20 // num = 70

/*
    products.length = 3
    1. let i = 0, 0 < 3 - true, sum = 0 + products[0].price = 10000, sum = 10000, i++, i = 1
    2. i = 1, 1 < 3 - true, sum = 10000 + products[1].price = 10000 + 15000, sum = 25000, i++, i = 2
    3. i = 2, 2 < 3 - true, sum = 25000 + products[2].price = 25000 + 20000, sum = 45000, i++, i = 3
    4. i = 3, 3 < 3 - false, выход из цикла
*/

// Вывести название второго продукта
// console.log(products[1].name) // "Iphone 14"

// Задача. Вывести в консоли названия каждого продукта
// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[2].name)
// решить задачу используя цикл for
// for(let i = 0; i < products.length; i++) {
//     console.log(products[i].name)
// }
/*
    products.length = 3
    1. let i = 0; 0 < 3 - true, console.log(products[0].name), i++, i = 1
    2. i = 1, 1 < 3 - true, console.log(products[1].name), i++, i = 2
    3. i = 2, 2 < 3 - true, console.log(products[2].name), i++, i = 3
    4. i = 3, 3 < 3 - FALSE, выйти из цикла
*/


/*
    объект - тип данных для хранения различных свойств
    в объекте, в отличии от массива, не важен порядок расположения элементов.

    Типы данных
    1. число
    2. строка
    3. булевый
    4. объект
        массив - частный случай объекта, ключами которого являются числа от 0 до n 
*/


// Задача. Создать массив объектов users.
// У каждого пользователя в объекте будут свойства email, login, age
// Создать три объекта
// const users = [
//     {
//         name: "Yuliya",
//         email: "yuliya@gmail.com",
//         login: "Simbo7",
//         age: 23
//     },
//     {
//         name: "Arsen",
//         email: "arsen@gmail.com",
//         login: "Simbo77",
//         age: 15
//     },
//     {
//         name: "Alexander",
//         email: "alex@gmail.com",
//         login: "Simbo777",
//         age: 25
//     },
// ]
// Отобразить в консоли имя и email каждого пользователя в виде, используя цикл for
// "Ваш email - {email пользователя}, а ваш логин - {login пользователя}"
// 1. "Ваш email - yuliya@gmail.com, а ваш логин - Simbo7"
// 2. "Ваш email - arsen@gmail.com, а ваш логин - Simbo77"
// 3. "Ваш email - alex@gmail.com, а ваш логин - Simbo777"

// Отобразить в консоли login только тех пользователей, возраст которых больше 18

// for(let i = 0; i < users.length; i++) {
//     // console.log(`Ваш email - ${users[i].email}, а ваш логин - ${users[i].login}`)
//     if(users[i].age > 18) {
//         console.log(users[i].login)
//     }
// }

/*
    users.length = 3
    1. let i = 0; 0 < 3 - true, 23 > 18 - true - console.log("Simbo 7"), i++
    2. i = 1; 1 < 3 - true, 15 > 18 - false, i++
    3. i = 2; 2 < 3 - true, users[2].age. 25 > 18 - true - console.log("Simbo 777")
*/


// Создать новый массив, в который поместить логины только тех пользователей, 
// возраст которых больше 18
// const validatedUsers = [] //
// for(let i = 0; i < users.length; i++) {
//     if(users[i].age > 18) {
//         validatedUsers.push({login: users[i].login, age : users[i].age}) // push - метод который добавляет элемент в конец массива
//     }
// }
// console.log(validatedUsers)



/*
    users.length = 3
    1. let i = 0; 0 < 3 - true, 23 > 18 - true, validatedUsers.push("Simbo7"). ["Simbo7"], i++
    2. i = 1; 1 < 3 - true, 15 > 18 - false, i++
    3. i = 2; 2 < 3 - true,  25 > 18 - true, validatedUsers.push("Simbo777").  ["Simbo7", "Simbo777"]
*/





// ["Arsen", "Vasily", "Aleksey"].push("Vladyslav")
//[ "Vladyslav","Arsen", "Vasily", "Aleksey",]

// Есть массив объектов products. Нужно вывести в консоли имена только тех продукты,
// категория которых - TV

// const products = [
//     {
//         name: "Acer",
//         category: "laptop"
//     },
//     {
//         name: "Samsung",
//         category: "TV"
//     },
//     {
//         name: "Iphone 14",
//         category: "phone"
//     },
//     {
//         name: "Panasonic",
//         category: "TV"
//     }
// ]

// for(let i = 0; i < products.length; i++) {
//     if(products[i].category == "TV") {
//         console.log(products[i].name)
//     }
// }
/*
    length = 4
    1. let i = 0, 0 < 4 - true, products[0].category == TV - false, i++
    2. i = 1, 1 < 4 - true, products[1].category == TV - true, console.log("Samsung"), i++
    3. i = 2, 2 < 4 - true, products[2].category == TV - false, i++,
    4. i = 3, 3 < 4 - true, products[3].category == TV - true, console.log("Panasonic"), i++
    5. i = 4, 4 < 4 - false, ВЫХОД из цикла
*/


/*
    const username = "Arsen"
    const username1 = "Arsen"

    username == username1 - true
*/


/*
    1. вывести email каждого пользователя
    2. выести login каждого пользователя
    3. сформируйте нужные строки 

    const name = "Arsen"
    const surname = "Iusupov"

    name + surname // "ArsenIusupov"
    "hello" + name // "hello Arsen"

    `Hello ${name}, hello ${surname}`
*/
