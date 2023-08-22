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

// solucion previa:


// intervalos / contadores / inicialización del contador final

let dateUntilRelease = new Date();
dateUntilRelease.setSeconds(59 - dateUntilRelease.getSeconds());
console.log(dateUntilRelease.getSeconds())
dateUntilRelease.setMinutes(60 - dateUntilRelease.getMinutes());
dateUntilRelease.setHours(23 - dateUntilRelease.getHours());

//date2 es la fecha de hoy

setInterval(()=>{
    let actualDate = new Date();
    //actualDate es la fecha de actual y se actualiza cada 1 seg

    let restaDiasFechaActualConDeseada = 21 - actualDate.getDate();
    let restaMesesFechaActualConDeseada = 7 - actualDate.getMonth();
    dateUntilRelease.setDate(restaDiasFechaActualConDeseada);
    dateUntilRelease.setMonth(restaMesesFechaActualConDeseada);
    dateUntilRelease.setSeconds(dateUntilRelease.getSeconds() - 1);

    let remainingMonth = dateUntilRelease.getMonth() + 1;
    let remainingSeconds = dateUntilRelease.getSeconds();
    let remainingMinutes = dateUntilRelease.getMinutes();
    let remainingHours = dateUntilRelease.getHours();
    let remainingDays = dateUntilRelease.getDate();


    if (remainingMonth < 10){
        months.textContent = '0'+remainingMonth;
    } else {
        months.textContent = remainingMonth;
    }

    if ( remainingSeconds < 10){
        secs.textContent = '0'+remainingSeconds;
    } else {
        secs.textContent = remainingSeconds;
    }

    if ( remainingMinutes < 10){
        mins.textContent = '0'+remainingMinutes;
    } else {
        mins.textContent = remainingMinutes;
    }

    if ( remainingHours < 10){
        hours.textContent = '0'+remainingHours;
    } else {
        hours.textContent = remainingHours;
    }

    if ( remainingDays < 10){
        days.textContent = '0'+remainingDays;
    } else {
        days.textContent = remainingDays;
    }    

    /*
    Este intervalo cada 1 seg obtiene la fecha actual vÃ­a objeto Date().
    luego utiliza la fecha actual para actualizar los datos constantemente.
    */

},1000);

// slider de imagenes

// contenedor de imagenes
const imgContainer = document.querySelector('.imgBorder');
// lista de imagenes
// let imgList = [
//     'https://cdn.cloudflare.steamstatic.com/steam/apps/1272080/ss_9c46b95ab12abc2f78e4e422b74f7606d6babc19.1920x1080.jpg?t=1691159104',
//     'https://www.infobae.com/new-resizer/oIXP1_Txc0wzutDasLESlYkh4mY=/arc-anglerfish-arc2-prod-infobae/public/C3OB372WGJEXFB2I4RP442PQRE.jpg',
//     'https://prod.assets.earlygamecdn.com/images/Payday-3-Release-Date-Gameplay-Combat-Characters.png?mtime=1688657051',
//     'https://gaming-cdn.com/images/products/6442/616x353/payday-3-pc-spil-steam-cover.jpg?v=1686753600',
//     'https://www.somosxbox.com/wp-content/uploads/2023/05/payday-3-1.jpg'
// ];

// // contador de imgs
// let imgCounter = 0;

// setInterval(()=>{

//     if (imgCounter === 4){
//         imgContainer.innerHTML = `<img src="${imgList[imgCounter]}" alt="">`;
//         imgCounter = 0;
//     } else {
//         imgContainer.innerHTML = `<img src="${imgList[imgCounter]}" alt="">`;
//         imgCounter+=1;
//     }

// },5000);

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


// hay que probar con window.onload para que carguen de arranque
// hacer una animacion con la propiedad opacity tambien e ir probando