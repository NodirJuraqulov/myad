// console.log("Hello World!");

// let ism = prompt("Ismingizni kiriting: ");

// let x = ism.charAt(0).toUpperCase();
// let y = ism.slice(1).toLowerCase();

// let result = x+y;

// console.log(result);




// let age = prompt("Yoshingizni kiriting: ");

// if (age < 18) {
//     console.log("Siz voyaga yetmagansiz!");
// }  else {
//     console.log("Siz voyaga yetgansiz.");
// }




// let arr = ["apple", "banana", "orange"];

// console.log(arr);

// arr.push("kiwi");

// arr.unshift("ananas");

// console.log(arr);



// let arr = [];

// for (let i = 1; i < 11; i++) {
//     arr.push(i);
// }

// console.log(arr);


// let arr = [];

// for (let i = 2; i < 11; i += 2) {
//     arr.push(i);
// }

// console.log(arr);



// const obj = {
//     firstName: "Nodir",
//     lastName: "Jurakulov",
//     age: 25,
//     city: "Tashkent",
//     origin: "Bukhara"
// } 

// console.log(obj);




// let text = prompt("Matnni kiriting: ");

// console.log(text.length);

// console.log(text.toLowerCase());

// console.log(text.toUpperCase());

// console.log(text.split('').reverse().join(''));




// // Foydalanuvchidan vergul bilan ajratilgan sonlarni olish
// const inputNumbers = "10,20,30,40,50"; // Masalan: foydalanuvchidan kiritilgan ma'lumot
// const numbers = inputNumbers.split(',').map(Number); // Stringni massivga aylantirish

// // Massiv elementlari yig‘indisi
// const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);

// // Eng katta va eng kichik qiymatni topish
// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);

// // Har bir elementning kvadrati bo‘lgan yangi massiv
// const squaredNumbers = numbers.map(num => num ** 2);

// // Natijalarni chiqarish
// console.log(`Yig‘indi: ${sumOfNumbers}`);
// console.log(`Eng katta son: ${maxNumber}`);
// console.log(`Eng kichik son: ${minNumber}`);
// console.log(`Kvadratlar massivi: ${squaredNumbers}`);










// let ism = prompt("Ismingizni kiriting: ");

// let age = Number(prompt("Yoshingizni kiriiting: "));

// let year = 2024 - age;
// let month = age * 12;
// let week = (month * 30) / 7;
// let day = week * 7;
// let hour = day * 24;
// let min = hour * 60;
// let sek = min * 60;

// console.log(`${ism} ${year} yili tug'ilgan va hozirgacha ${month} oy, ${week} hafta, ${day} kun, ${hour} soat, ${min} daqida, ${sek} soniya yashagan.`);







// const ism = prompt("Ism kiriting: ");

// const ismlar = ["Nodir", "Ahad", "G'ayrat", "Oxun"];

// // ismlar.forEach(element => {
// //     if (ism === element) {
// //         console.log(`Ha ${element} bor.`);
// //     }  else {
// //         console.log(`Uzur ${ism} bu yerda yashamaydi!`);
// //     }
// // });

// if (ismlar.includes(ism)) {
//     console.log(`Ha ${ism} bor.`);
// } else {
//     console.log(`Uzur ${ism} bu yerda yashamaydi!`);
// }



// const ismlar = ["Nodir", "Ahad", "G'ayrat", "Oxun"];

// const new_ismlar = [];

// ismlar.forEach(element => {
//     new_ismlar.push(element+"bek")
// });

// alert(new_ismlar);




// function calcAge(birthday, firstname) {
//     const myAge = 2025-birthday;
//     console.log(`${firstname} siz ${myAge} yoshga kirdiz!`);
//     return myAge;
// }

// const myAge = calcAge(2002, "Nodir");




// const myFunc = (callbackFunc) => {
//     const number = 50;
//     callbackFunc(number);
// }

// myFunc((value) => {
//     console.log(value);
// })




// const ismlar = ["Nodir", "Ahad", "Oxun", "G'ayrat"];

// ismlar.forEach(function(ism) {
//     const newIsm = ism.charAt().toLocaleUpperCase() + ism.slice(1).toLocaleLowerCase() + "bek";
//     console.log(newIsm);
// })





// function add(a, b) {
//     const calc = a+b;
//     console.log(calc);
// }

// add(2, 5);
// add(19,25);




// const ism = (name) => {
//     console.log(`Salom, ${name}`);
// }

// ism("Nodir");
// ism("Javohir");





// function multiply(a, b = 10) {
//     return a * b;
// }

// console.log(multiply(5));
// console.log(multiply(12, 15));







// const daraja = (a=2) => {
//     return a*a*a;
// }

// console.log(daraja(5));






// function createMultiplier(num) {
//     return function (x) {
//         return x * num;
//     };
// }

// // Foydalanish:
// const multiplyByTwo = createMultiplier(2); // 2 ga ko‘paytiruvchi funksiya yaratildi
// console.log(multiplyByTwo(5)); // Natija: 10 (5 * 2)
// console.log(multiplyByTwo(8)); // Natija: 16 (8 * 2)





// function createNums(a, b) {
//     return function (x) {
//         return x / (a + b);
//     };
// }

// const calc = createNums(2,3);
// console.log(calc(100));






// function operate(a, b, callback) {
//     return callback(a, b);
// }

// // Callback funksiyalardan foydalanish:
// function add(x, y) {
//     return x + y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function daraja(x, y) {
//     return x**y;
// }

// // Foydalanish:
// console.log(operate(5, 3, add)); // Natija: 8 (5 + 3)
// console.log(operate(5, 3, multiply)); // Natija: 15 (5 * 3)
// console.log(operate(5, 3, daraja)); // Natija: 125 (5 ** 3)





// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// console.log(factorial(10));
// console.log(factorial(6));





// alert("Hello World!");

// const users = {
//     name: "Nodir",
//     age: 23,
//     email: "njuraqulov2288@gmail.com",
//     location: "Bukhara",
//     langs: ["Uzbek", "Russian", "English"],
//     login: function () {
//         console.log("Siz o'z sahifangizga kirdingiz.");
//     },
//     logout: function () {
//         console.log("Siz bu saytdagi sahifangizni tark etdingiz.");
//     },
//     speak: function () {
//         console.log("I can speak:");
//         this.langs.forEach((lang) => {
//             console.log(lang);
//         });
//     }
// }

// users.speak(); 





// const movies = [
//     {name:"Avatar", likes: 500},
//     {name:"Titanik", likes: 800},
//     {name:"Boyka", likes: 700},
//     {name:"Forsaj", likes: 600},
// ]

// movies.forEach((movie) => {
//     const result = `"Kino nomi: " ${movie.name}, "Likes: " ${movie.likes}`
//     console.log(result); 
// })












/*******  DOM-Document Object Modul  ********/

// 1) getElementsByTagName:

// const tagName = document.getElementsByTagName("li");
// console.log(tagName[0]);


// 2) getElementsByClassName:

// const listItem = document.getElementsByClassName("list-item");
// console.log(listItem);


// 3) getElementById:

// const listItem = document.getElementById("click-btn");
// console.log(listItem);


// 4) querySelector / querySelectorAll:

// const listItem = document.querySelector("li");
// console.log(listItem);

// const listItem = document.querySelectorAll("li");
// console.log(listItem);

// const listItem = document.querySelectorAll("li");
// listItem.forEach((item) => {
//     console.log(item);
// })







// textContent:   --- teglarni tushunmaydi;


// const title = document.getElementById("title");

// title.textContent += " New text"; 


// const listItem = document.querySelectorAll(".list-item");

// listItem.forEach((item) => {
//     item.textContent += " darslari"
// })


// innerHTML:   --- teglarni tushunadi;


// const title = document.getElementById("title");

// title.innerHTML += " <i>New text</i>";         // <i></i> tegi ishlaladi.


// const names = ["Nodir", "G'ayrat", "Oxun"];

// const ol = document.querySelector("ol");

// names.forEach((name) => {
//     ol.innerHTML += `<li> ${name}</li>`;
// })


// innerText:   --- kop ishlatilinmaydi.






//   getAttribute && setAttribute:

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.yandex.ru');

// link.innerHTML = 'Go To Yandex Main Page';

// const para = document.querySelector('p');

// para.setAttribute('class', 'success');

// para.setAttribute('style', 'color: red; font-size: 20px');




// const heading = document.querySelector('h1');

// // heading.setAttribute('style', 'margin: 50px');    // --> ustiga yozadi, oldingi style o'chib ketadi. 

// heading.style.margin = '50px';                       // --> oldingisini yoniga qo'shadi.
// heading.style.color = 'crimson';









//   AMALIY MASHQ:   


// const myArray = [[false, true], [1,2], 99, 'good'];

// myArray.forEach((item, i) => {
//     if (typeof item == 'string') {
//         console.log('String index: ', i);
//     }
// })





// const myArray = [[1, 2, 3], 'qizil', [4, 5, 6], true, false];
// const newArray = [];

// myArray.forEach((item, i) => {
//     if (typeof item !== 'string' && item !== true && item !== false) {
//         item.forEach((a) => {
//             newArray.push(a);
//         })   
//     }
// })

// console.log(newArray);    // Array.isArray bilan shartni tekshirish ham mumkin!







// const word = "aSsaLomU AlAyKUm, yaXShimIsiZ";

// let newWord = "";

// const wordArr = word.split(' ');

// console.log(wordArr);

// wordArr.forEach((item) => {

//     console.log(item);

//     const start = item.charAt().toLocaleUpperCase();

//     const end = item.slice(1).toLocaleLowerCase();

//     newWord += start + end + ' ';

// })

// console.log(newWord);






// const word = "Qalesiz yaxshimisiz? Yaxshimi ishlar";

// let a = 0;

// prompt(word);

// const splitWord = word.split('');

// console.log(splitWord);

// splitWord.forEach((item) => {
//     if (item == 'a') {
//         a += 1;
//     }
// })

// console.log(a);





// const arr = [1, 2, 3, 4, 5];

// let newArr = [];

// arr.forEach((num, i) => {

//     newArr.push(num+i);

// })


// console.log(newArr);







// let num = +(prompt('Sonni kiriting: '));

// let sum = 0;

// for (let i = 1; i <= num; i++) {

//     sum += i;

// }

// console.log(sum);









// const a = +(prompt('Sonni kiriting: '));

// // const n = +(prompt('n sonini kiriting: '));

// let sum = 0;

// let arr = [];

// for (let i = 1; i < 11; i++) {

//     sum = a * i + 1;
//     arr.push(sum);

// }

// console.log(arr);







// const arr = [-1, 2, 3, -4, 5];
// let newArr = [];

// arr.forEach((num) => {
//     let i = -1 * num;
//     newArr.push(i);
// })

// console.log(newArr);





// const num = +(prompt('Sonni kiriting: '));
// let arr = [];

// for (let i = 1; i <= num; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         arr.push('fizzbuzz');
//     } else if (i % 5 == 0) {
//         arr.push('buzz');
//     } else if (i % 3 == 0) {
//         arr.push('fizz');
//     } else {
//         arr.push(i);
//     }

// }

// console.log(arr);





// function otinYor(callback) {
//     console.log("O‘tin yorilmoqda...");
//     setTimeout(() => {
//         console.log("O‘tin tugadi!");
//         callback(); // Callback funksiya: choy qaynatishni chaqiryapti
//     }, 5000); // 5 soniya kutamiz (vaqtni tasvirlash uchun)
// }

// function choyQaynat(choy) {
//     console.log("Choy qaynatilmoqda...");
//     setTimeout(() => {
//         console.log("Choy qaynatildi!");
//         choy();
//     }, 3000);
// }

// // Otin yorganingdan keyin choy qaynatishni so'raymiz
// otinYor(choyQaynat);




const obj = {
    name: "Alisher",
    age: 21
}
        
const obj2 = {
    age: "Tashkent",
    salary: 2100
}
        
console.log({...obj2, ...obj})

