// constantes del reloj
const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const mins = document.querySelector('#mins');
const secs = document.querySelector('#secs');


// intervalos / contadores

setInterval(()=>{
    let date = new Date();
    secs.textContent = date.getSeconds(); 
    mins.textContent = date.getMinutes(); 
    hours.textContent = date.getHours();
    days.textContent = date.getDate(); // 21
    months.textContent = date.getMonth() + 1; // 9

    /*
    Este intervalo cada 1 seg obtiene la fecha actual vía objeto Date().
    luego utiliza la fecha actual para actualizar los datos constantemente.
    */

},1000);

console.log(Date())