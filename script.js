
// This kalit so'zini
// I Kirsh 

// this , this kod ichida turli kontekslarda har xil qiymatlarga ega bo'lishi mumkin.
// This kalit so'zini yaxshi tushinish , murakkab JS kodlarni yozishda va o'qish qo'l keladi.

// Misol uchun silar bilan gaplashiyabman va "men" aytayotganimda, bu so'z meni anglatadi,
// JS'da ham huddi shunga o'xshash ko'rinishda ishlaydi.

// II Uning ishlatilishi

// This Global konteksda odatda "window" objectini anglatadi (browserda ishlayotganda)

// console.log(this) // GLobal kontekstda

// III funksiyalarda

// Oddiy funksiyada "this" ning qiymati windowga teng bo'ladi. Agar "qa'tiy rejim"da ishlasak uning qiymati undefinedga teng bo'ladi
// 'use strict'

// function inFunctions() {
//     console.log(this);
// }
// inFunctions()

// Obyekt ichidagi metod va funksiyalarda o'sha obyektni anglatadi

// const person = {
//     firstname: 'Jahongir',
//     greeting: function() {
//         console.log(`My name is ${this}`);
//     }
// }
// person.greeting()

// IV Arrow function

// Arrow functionlarni oddiy funksiyadan farqi ular "this" contextini yaratmaydi. Bu ancha qulaylik yaratadi, chunki ular yuqoriroq kontextdan
// "this"ni oladi

// const human = {
//     firstname: 'Jahongir',
//     greeting: () => {
//         console.log(`My name is ${this.firstname}`);
//     }
// }
// human.greeting()

// Bu yerda arrow funksiya "this"ni global kontextdan oladi, shu sababli "this.firstname" undefinedga teng bo'ladi