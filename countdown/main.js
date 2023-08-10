// // constantes del reloj
// const months = document.querySelector('#months');
// const days = document.querySelector('#days');
// const hours = document.querySelector('#hours');
// const mins = document.querySelector('#mins');
// const secs = document.querySelector('#secs');


// // fecha de salida payday 3

// let date = new Date();
// const dayS = date.setDate(21);
// const monthS = date.setMonth(8);
// // S stands for Salida


// // intervalos / contadores

// setInterval(()=>{
//     let date = new Date();
//     secs.textContent = date.getSeconds(); 
//     mins.textContent = date.getMinutes(); 
//     hours.textContent = date.getHours();
//     days.textContent = date.getDate(); // 21
//     months.textContent = date.getMonth() + 1; // 9

//     /*
//     Este intervalo cada 1 seg obtiene la fecha actual vía objeto Date().
//     luego utiliza la fecha actual para actualizar los datos constantemente.
//     */

// },1000);

// console.log(Date())
// console.log(date);


// constantes del reloj
const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');


// fecha de salida payday 3

let date = new Date();
const dayS = date.setDate(21);
const monthS = date.setMonth(8);
// S stands for Salida


// intervalos / contadores

let date2 = new Date();

setInterval(()=>{
    let actualDate = new Date();
    let restaDiasFechaActualConDeseada = 21 - actualDate.getDate();
    let restaMesesFechaActualConDeseada = 7 - actualDate.getMonth();
    date2.setDate(restaDiasFechaActualConDeseada);
    date2.setMonth(restaMesesFechaActualConDeseada);

    date2.setSeconds(date2.getSeconds() - 1);
    secs.textContent = date2.getSeconds(); 
    mins.textContent = date2.getMinutes(); 
    hours.textContent = date2.getHours();
    days.textContent = date2.getDate(); // 21
    months.textContent = date2.getMonth() + 1; // 9

    // console.log(date2);

    /*
    Este intervalo cada 1 seg obtiene la fecha actual vÃ­a objeto Date().
    luego utiliza la fecha actual para actualizar los datos constantemente.
    */

},1000);

let patata = new Date()
//let restaDiasFechaActualConDeseada = 21 - patata.getDate()
//let restaMesesFechaActualConDeseada = 8 - patata.getMonth()
//patata.setDate(restaDiasFechaActualConDeseada)
//patata.setMonth(restaMesesFechaActualConDeseada)
//console.log(patata);
console.log(patata.getMonth())
//console.log(patata.getDate())