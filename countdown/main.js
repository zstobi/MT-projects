// solucion actual - en desarrollo

// constantes del reloj
const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');

// constantes - cantidad de dias en mes
const meses = {
    '0': 31,
    '1': 28,
    '2': 31,
    '3': 30,
    '4': 31,
    '5': 30,
    '6': 31,
    '7': 31,
    '8': 30,
    '9': 31,
    '10': 30,
    '11': 31
};

// fecha de salida payday 3

let date = new Date();
const dayS = date.setDate(21);
const monthS = date.setMonth(8);
// S stands for Salida

let currentDate = new Date();

let currentMonth = currentDate.getMonth();

let distanceToWishedDate = ( meses[currentMonth] - currentDate.getDate() ) + date.getDate();

// -----------------------------------------------------------------------------------------------------------------------

// pensar funcion asincronica para esperar a ejecutar la logica y que vaya a la par de un reloj real
// ejemplo: que el contador vaya a la par que el reloj de 1 en 1, y no de 1,5 en 1,5


// intervalos / contadores / inicialización del contador final

let dateUntilRelease = new Date();
dateUntilRelease.setSeconds(59 - dateUntilRelease.getSeconds());
console.log(dateUntilRelease);
dateUntilRelease.setMinutes(60 - dateUntilRelease.getMinutes());
dateUntilRelease.setHours(23 - dateUntilRelease.getHours());

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

const fechaFutura = new Date(2023,11,21);

let timerTest = setInterval(()=>{

    let fechaActual = new Date();

    const distanceToPayday3 = fechaFutura.getTime() - fechaActual.getTime();

    // const totalSecondsLeft = distanceToPayday3 / second;
    // const totalMinutesLeft = distanceToPayday3 / minute;
    // const totalHoursLeft = distanceToPayday3 / hour;
    const totalDaysLeft = distanceToPayday3 / day;

    let hoursLeft = (totalDaysLeft - Math.floor(totalDaysLeft)) * 24;
    let minutesLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    let secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;
    // let milisecondsLeft = (secondsLeft - Math.floor(secondsLeft)) * 1000;

    //let fechaTest = new Date(2024,1,7);
    let mesFuturo = fechaFutura.getMonth();
    //let newDate = new Date();
    let mesActual = fechaActual.getMonth();
    let daysWithMonths = 0;
    let monthCounter = 0;

    //while (mesActual > mesFuturo) {
    //    if ( mesActual === 11){
    //        mesActual = 0;
    //    }
    //    daysWithMonths =+ meses[mesActual]; // daysleft - daysWithMonths dias restantes
    //    mesActual++;
    //    monthCounter++;
    //}

    while (mesActual != mesFuturo) {
        if ( mesActual === 11){
            mesActual = 0;
        }
        daysWithMonths = daysWithMonths + meses[mesActual]; // daysleft - daysWithMonths dias restantes
        mesActual++;
        monthCounter++;
    }

    //problema: totalDaysLeft en realidad está sumando un mes de más, hay que evitar eso

    const remainingMonths = Math.floor(monthCounter);
    const remainingDays = (Math.floor(totalDaysLeft) - daysWithMonths); //Math.floor(totalDaysLeft);
    const remainingHours = Math.floor(hoursLeft);   
    const remainingMinutes = Math.floor(minutesLeft);
    const remainingSeconds = Math.floor(secondsLeft);

    console.log(Math.floor(totalDaysLeft))
    console.log(Math.floor(daysWithMonths))

    if ( remainingMonths < 10){
        months.textContent = '0'+remainingMonths;
    } else {
        months.textContent = remainingMonths;
    }

    if ( remainingDays < 10){
        days.textContent = '0'+remainingDays;
    } else {
        days.textContent = remainingDays;
    }

    if ( remainingHours < 10){
        hours.textContent = '0'+remainingHours;
    } else {
        hours.textContent = remainingHours;
    }

    if ( remainingMinutes < 10){
        mins.textContent = '0'+remainingMinutes;
    } else {
        mins.textContent = remainingMinutes;
    }

    if ( remainingSeconds < 10){
        secs.textContent = '0'+remainingSeconds;
    } else {
        secs.textContent = remainingSeconds;
    }

},1000);


//let fechaTest = new Date(2024,1,7);
//let mesFuturo = fechaTest.getMonth();
//let newDate = new Date();
//let mesActual = newDate.getMonth();
//let fallout4 = 0;
//let monthCounter = 0;
//
//const distanceToFutureDate = fechaTest.getTime() - newDate.getTime();
//
//let totalDaysLeft = distanceToFutureDate / day;
//
//while (mesActual > mesFuturo) {
//    if ( mesActual === 11){
//        mesActual = 0;
//    }
//    fallout4 = fallout4 + meses[mesActual]; // daysleft - fallout4 dias restantes
//    mesActual++;
//    monthCounter++;
//}
//
//console.log(Math.floor(totalDaysLeft) - fallout4);


// setInterval(()=>{
//     let actualDate = new Date();
//     //actualDate es la fecha de actual y se actualiza cada 1 seg

//     let restaDiasFechaActualConDeseada = 21 - actualDate.getDate();
//     let restaMesesFechaActualConDeseada = 7 - actualDate.getMonth();
//     dateUntilRelease.setDate(restaDiasFechaActualConDeseada);
//     dateUntilRelease.setMonth(restaMesesFechaActualConDeseada);
//     dateUntilRelease.setSeconds(dateUntilRelease.getSeconds() - 1);

//     let remainingMonth = dateUntilRelease.getMonth() + 1;
//     let remainingSeconds = dateUntilRelease.getSeconds();
//     let remainingMinutes = dateUntilRelease.getMinutes();
//     let remainingHours = dateUntilRelease.getHours();
//     let remainingDays = dateUntilRelease.getDate();


//     if (remainingMonth < 10){
//         months.textContent = '0'+remainingMonth;
//     } else {
//         months.textContent = remainingMonth;
//     }

//     if ( remainingSeconds < 10){
//         secs.textContent = '0'+remainingSeconds;
//     } else {
//         secs.textContent = remainingSeconds;
//     }

//     if ( remainingMinutes < 10){
//         mins.textContent = '0'+remainingMinutes;
//     } else {
//         mins.textContent = remainingMinutes;
//     }

//     if ( remainingHours < 10){
//         hours.textContent = '0'+remainingHours;
//     } else {
//         hours.textContent = remainingHours;
//     }

//     if ( remainingDays < 10){
//         days.textContent = '0'+remainingDays;
//     } else {
//         days.textContent = remainingDays;
//     }

//     /*
//     Este intervalo cada 1 seg obtiene la fecha actual vÃ­a objeto Date().
//     luego utiliza la fecha actual para actualizar los datos constantemente.
//     */

// },1000);

// slider de imagenes

// contenedor de imagenes
const imgContainer = document.querySelector('.imgBorder');

// lista de imagenes
let img1 = document.querySelector('#img1');
let img2 = document.querySelector('#img2');
let img3 = document.querySelector('#img3');
let img4 = document.querySelector('#img4');
let img5 = document.querySelector('#img5');

let imgList = [img1,img2,img3,img4,img5];

let imgCounter = 0;

setInterval(()=>{
    imgCounter++;

    if (imgCounter !== 5){
        // efectuar cambio de display en imagen previa
        imgList[imgCounter -1].classList.remove('displayOn');
        imgList[imgCounter -1].classList.add('displayOff');

        // efectuar cambio de display en imagen actual
        imgList[imgCounter].classList.remove('displayOff');
        imgList[imgCounter].classList.add('displayOn');

    } else {
        // efectuar cambio de display en imagen previa
        imgList[imgCounter -1].classList.remove('displayOn');
        imgList[imgCounter -1].classList.add('displayOff');

        imgCounter = 0;
        
        // efectuar cambio de display en imagen actual
        imgList[imgCounter].classList.remove('displayOff');
        imgList[imgCounter].classList.add('displayOn');
    }

},5000);    